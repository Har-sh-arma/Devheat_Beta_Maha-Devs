package com.devheat.billbot;

import android.os.Environment;
import android.widget.Toast;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class PDFcreator {

    public static void createpdf()throws FileNotFoundException {

        String pdfpath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).toString();
        File file = new File(pdfpath,User.invoice_num+".pdf");
        OutputStream outputStream = new FileOutputStream(file);

        PdfWriter writer = new PdfWriter(file);
        PdfDocument pdfDocument = new PdfDocument(writer);
        Document document = new Document(pdfDocument);

        float column_width[] = {40f,40f,40f,40f,40f,40f,40f,40f,40f,40f,40f,40f};

        Table table = new Table(column_width);

        table.addCell(new Cell(1,12).add(new Paragraph("Tax invoice")));

        table.addCell(new Cell(1,12).add(new Paragraph(User.name)));

        table.addCell(new Cell(1,12).add(new Paragraph(User.address)));

        table.addCell(new Cell(1,6).add(new Paragraph("Call at :"+User.phone)));
        table.addCell(new Cell(1,6).add(new Paragraph("Mail at :"+User.email)));

        table.addCell(new Cell(2,4).add(new Paragraph("GSTIN No."+User.GSTIN)));
        table.addCell(new Cell(2,4).add(new Paragraph("HSN Code : 996331")));
        table.addCell(new Cell(1,2).add(new Paragraph("Invoice no.")));
        table.addCell(new Cell(1,2).add(new Paragraph("Dated")));

        table.addCell(new Cell(1,2).add(new Paragraph("INVN"+User.invoice_num)));
        table.addCell(new Cell(1,2).add(new Paragraph(Bill.date)));

        table.addCell(new Cell(1,1).add(new Paragraph("Sr. no.")));
        table.addCell(new Cell(1,4).add(new Paragraph("Item Name")));
        table.addCell(new Cell(1,2).add(new Paragraph("Price")));
        table.addCell(new Cell(1,1).add(new Paragraph("Qty")));
        table.addCell(new Cell(1,2).add(new Paragraph("Units")));
        table.addCell(new Cell(1,2).add(new Paragraph("Amount")));

        for(int i = 0; i < Bill.count; i++){
            table.addCell(new Cell(1,1).add(new Paragraph(Integer.toString(i+1))));
            table.addCell(new Cell(1,4).add(new Paragraph(Bill.data[i][0])));
            table.addCell(new Cell(1,2).add(new Paragraph(Bill.data[i][1])));
            table.addCell(new Cell(1,1).add(new Paragraph(Bill.data[i][2])));
            table.addCell(new Cell(1,2).add(new Paragraph("Servings")));
            table.addCell(new Cell(1,2).add(new Paragraph(Bill.data[i][3])));
        }

        table.addCell(new Cell(1,10).add(new Paragraph("Sub-total")));
        table.addCell(new Cell(1,2).add(new Paragraph(Bill.totol_amount)));

        double tax = Integer.parseInt(Bill.totol_amount)*0.05;

        table.addCell(new Cell(1,10).add(new Paragraph("GST amount")));
        table.addCell(new Cell(1,2).add(new Paragraph(Double.toString(tax))));

        double amount_payable = Integer.parseInt(Bill.totol_amount) +tax;

        table.addCell(new Cell(1,10).add(new Paragraph("AMOUNT PAYABLE")));
        table.addCell(new Cell(1,2).add(new Paragraph(Double.toString(amount_payable))));





        document.add(table);
        document.close();

    }
}
