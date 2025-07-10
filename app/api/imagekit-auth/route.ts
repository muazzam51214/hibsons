import { getUploadAuthParams } from "@imagekit/next/server";

export async function GET() {
  try {
    const authenticationParameters = getUploadAuthParams({
      privateKey: process.env.IMAGE_KIT_PRIVATE_KEY as string,
      publicKey: process.env.IMAGE_KIT_PUBLIC_KEY as string,
    });

    return Response.json({
      authenticationParameters,
      publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    });
  } catch (error) {
    console.error("Imagekit Auth Error: ", error);
    return Response.json({
      error: "Authentication for Imagekit Failed",
      status: 500,
    });
  }
}