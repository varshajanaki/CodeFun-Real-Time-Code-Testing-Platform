function run()
{
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    // let output = document.getElementById("output");
  //  output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>" + "<scri" + "pt>" + jscode + "</scri" + "pt>";; 

    //my code 
     // Clear the iframe content before writing new content
    let doc = output.contentDocument || output.contentWindow.document;
    doc.open();
    doc.write('<!DOCTYPE html><html><head><style>' + csscode + '</style></head><body>' + htmlcode + '<script>' + jscode + '<\/script></body></html>');
    doc.close();

}
