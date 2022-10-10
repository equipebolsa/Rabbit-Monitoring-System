/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projeto.rabbit;

public class Monitoramento {
    public static void clearConsole(){
        
        try {
            String os = System.getProperty("os.name");
            
            if (os.contains("Windows")){
                Runtime.getRuntime().exec("cls");
            }else{
                Runtime.getRuntime().exec("clear");
            }
        } 
        catch (Exception e) {
            
        }
    }
}

