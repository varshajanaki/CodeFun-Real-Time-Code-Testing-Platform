function run()
{
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    // let output = document.getElementById("output");
    // output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>" + "<scri" + "pt>" + jscode + "</scri" + "pt>";; 

    //my code
    // Access the iframe and its document
    let output = document.getElementById("output");
    let doc = output.contentDocument || output.contentWindow.document;
    
    // Ensure the iframe document is properly formatted
    doc.open();
    doc.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>
                ${jsCode}
            <\/script>
        </body>
        </html>
    `);
    doc.close();
 

}
