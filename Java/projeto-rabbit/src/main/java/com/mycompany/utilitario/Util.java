/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.utilitario;

import java.awt.Toolkit;
import javax.swing.JFrame;

/**
 *
 * @author gusta
 */
public  class Util {
    public void InserirIcone(JFrame jframe){
        jframe.setIconImage(Toolkit.getDefaultToolkit().getImage(getClass().getResource("/logo.png")));
    }
}
