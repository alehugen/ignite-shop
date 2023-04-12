import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = '';

  const successUrl = `${process.env.NEXT_URL}/succes`;
  const cancel_url = `${process.env.NEXT_URL}/`;

  const checoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancel_url,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checoutSession.url,
  })
}