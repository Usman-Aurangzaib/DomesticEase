import { getUser, getUserInfo } from "@/app/actions/user";
import { NextRequest, NextResponse } from "next/server";
//@ts-ignore
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const email = body?.email;

  try {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "usmanjutt8132@gmail.com",
        pass: "ncsyaivxpcudqrye",
      },
    });

    // Define email options
    let mailOptions = {
      from: "usmanjutt8132@gmail.com",
      to: email,
      subject: "New order - Domestic ease",
      html: `You received a new order check now on your portal.`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: "Email not sent",
    });
  }
};
