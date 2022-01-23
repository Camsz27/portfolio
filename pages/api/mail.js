import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const subject = req.body.subject;
  const mail = req.body.email;
  const name = req.body.name;
  const message = req.body.message;
  try {
    const msg = {
      to: 'camiloagr2707@gmail.com',
      from: 'camiloagr2707@gmail.com',
      subject: subject,
      text: message,
      html: `<div>
      <h3>Name of the person: ${name}</h3>
      <h3>Email of the person: ${mail}</h3>
      <p>${req.body.message}</p>
      </div>`,
    };
    const response = await sgMail.send(msg);
    console.log(response);
    return res.json('Email sent');
  } catch (error) {
    return res.json(error);
  }
}

export default sendEmail;
