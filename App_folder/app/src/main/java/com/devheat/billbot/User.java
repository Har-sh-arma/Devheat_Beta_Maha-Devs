package com.devheat.billbot;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class User {
    public String name;
    public String address;
    public int GSTIN;
    public int invoice_num;

    public void User(String name, String address, int GSTIN, int invoice_num){
        this.name = name;
        this.address = address;
        this.GSTIN = GSTIN;
        this.invoice_num = invoice_num;
    }

}
