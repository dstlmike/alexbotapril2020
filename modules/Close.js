var nodemailer = require('nodemailer');
var Transport = nodemailer.createTransport({
service: 'gmail',
auth: {
type: 'XOAuth2',
user: 'alexdeabot@gmail.com',
//pass: '113Hopest!',
// Your gmail address.
// Not @developer.gserviceaccount.com
clientId: '33283131522-cq29rhd7rljomaj05rmj3akduug5ssag.apps.googleusercontent.com',
clientSecret: 'q4c5EwEjj55y49uI3jiOTuFf',
refreshToken: '1/erwx2VawfafgCpfx6N674Nzdae4klHplI9qAV4ZI5HM'

}
//}
});

var mailOptions = {
to: 'dstl_mike1@hotmail.com',
from: 'alexdeabot@gmail.com',
subject: 'Hello',
generateTextFromHTML: true,
html: '<b>Hello world</b>'
};

Transport.sendMail(mailOptions, function(error, response) {
if (error) {
console.log(error);
} else {
console.log(response);
}
Transport.close();
});
