package com.devheat.billbot;

import android.content.Context;
import android.os.Bundle;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import org.json.*;

import androidx.appcompat.app.AppCompatActivity;

import java.io.File;
import java.io.FileNotFoundException;

public class MainActivity extends AppCompatActivity {

    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.myWebView);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webView.addJavascriptInterface(new WebAppInterface(this), "Android");
        webView.setWebViewClient(new Callback());
        webView.loadUrl("file:///android_asset/for_smartphone.html");
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
                android.util.Log.d("WebView", consoleMessage.message());
                return true;
            }
        });

    }



    public class WebAppInterface {
        Context mContext;

        /**
         * Instantiate the interface and set the context
         */
        WebAppInterface(Context c) {
            mContext = c;
        }

        @JavascriptInterface
        public void receive_item(String index, String name, String price, String qty, String amount){
            int i = Integer.parseInt(index);

            Bill.data[i][0] = name;
            Bill.data[i][1] = price;
            Bill.data[i][2] = qty;
            Bill.data[i][3] = amount;

        }

        @JavascriptInterface
        public String load_user_data(){
            return User.LoadUserData(mContext);
        }

        @JavascriptInterface
        public String add_user_data(String json_string){
            return User.AddUserData(json_string,mContext);
        }

        @JavascriptInterface
        public void add_bill_info(String name, String address, String phone, String email, String GSTIN, String invoice_num, String date, String count, String total_amount){
            User.name = name;
            User.address = address;
            User.phone = phone;
            User.email = email;
            User.GSTIN = GSTIN;
            User.invoice_num = invoice_num;
            Bill.date = date;
            Bill.count = Integer.parseInt(count);
            Bill.totol_amount = total_amount;
            Bill.data = new String[Bill.count][4];
        }

        @JavascriptInterface
        public void printpdf(){


            try {
                PDFcreator.createpdf();
                Toast.makeText(mContext, "Pdf Created", Toast.LENGTH_SHORT).show();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }

        @JavascriptInterface
        public int showToast(String toast) {
            Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
            return 2;
        }
    }

    private class Callback extends WebViewClient{
        @Override
        public boolean shouldOverrideUrlLoading(WebView view,String url){
            return false;
        }
    }

    @Override
    public void onBackPressed(){
        if(webView != null && webView.canGoBack()){
            webView.goBack();
        }else{
            super.onBackPressed();
        }
    }
}
