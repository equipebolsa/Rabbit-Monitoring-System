const nodemailer = require("nodemailer");
const path = require('path');


function enviarEmail(req, res) {
    //TODO: colocar o ENV

    var today  = new Date();
    today = (today.toLocaleDateString("pt-BR"));
    today = today.replace("/","-")
    today = today.replace("/","-")

    if(today[0]=="0"){
        todayTrust = today.replace(today[0],"")
    }
    const user = "gustavo.antonio@sptech.school"
    const pass = "#Gf53451375877"

    const transporter = nodemailer.createTransport({ host: "smtp.office365.com", port: 587, auth: { user, pass } })
    const dirPath = path.join(__dirname, '../../public/dashboard/img/wordcloud/');

    const imgDir = dirPath+"wordlcloud-"+todayTrust+".png";
    console.log(imgDir);
    transporter.sendMail({
        from: user,
        to: user,
        // responde para
        replyTo: user,
        subject: "Wordcloud",
        attachments: [{
            filename: 'WordCloud.png',
            path: imgDir
        }],
        text: "WordCloud do seu Service Desk"
    }).then(function(resposta){
        res.status(200).json(resposta);
        
    }
    ).catch(function(erro){
        res.status(500).json(erro);
        
    })
}

module.exports = {
    enviarEmail
}