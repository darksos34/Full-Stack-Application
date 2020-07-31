/*
 *
 *  * Coding for fun created by Darksos34.
 *  * Copyright (c) 2020.
 *  * All rights reserved by Jordy Hamwijk
 *  * Learning Computer Language.
 *
 */

package com.FullStackApplication;

import javax.swing.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class WarningSQL {
    private JTextPane DATABASEMUSTBEONLINETextPane;
    private JToolBar user;

    // GUI FORM Warning
    public WarningSQL() {
        user.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                super.mouseClicked(e);
            }
        });
    }

    private void createUIComponents() {
        // TODO: place custom component creation code here
    }
}
