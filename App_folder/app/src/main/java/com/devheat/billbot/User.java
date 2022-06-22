package com.devheat.billbot;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;

public class User {

    public static void AddUserData(String json_string){
        try {
            PrintWriter out = new PrintWriter(new FileWriter("file:///android_asset/user.json"));
            out.write(json_string);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public static String LoadUserData(){
        try {
            return new String(Files.readAllBytes(Paths.get("file:///android_asset/user.json")));
        } catch (IOException e) {
            e.printStackTrace();
            return "Error in User.java";
        }
    }

}
