
package com.mycompany.utilitario;

import java.awt.Toolkit;
import javax.swing.JFrame;

public  class Util {
    public void InserirIcone(JFrame jframe){
        jframe.setIconImage(Toolkit.getDefaultToolkit().getImage(getClass().getResource("/logo.png")));
    }
}
