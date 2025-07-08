import { Resend } from 'resend';
import { LINKS } from '@/constants/links';
import { STRINGS } from '@/constants/strings';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    // 1. Send email to yourself
    const notification = await resend.emails.send({
      from: `${STRINGS.NAME} <${LINKS.RESEND_FROM_EMAIL}>`,
      to: LINKS.EMAIL,
      subject: STRINGS.NOTIFICATION_SUBJECT(name, email),
      html: STRINGS.NOTIFICATION_HTML(name, email, message),
    });

    // 2. Send acknowledgment email to the visitor
    const acknowledgment = await resend.emails.send({
      from: `${STRINGS.NAME} <${LINKS.RESEND_FROM_EMAIL}>`,
      to: email,
      subject: STRINGS.ACKNOWLEDGMENT_SUBJECT,
      replyTo: LINKS.RESEND_REPLY_TO_EMAIL,
      html: STRINGS.ACKNOWLEDGMENT_HTML(name),
    });

    return Response.json({ success: true, data: { notification, acknowledgment } });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
