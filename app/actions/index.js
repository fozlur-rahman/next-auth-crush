"use server";

const { signOut } = require("@/auth");

export async function doSignOut(params) {
    await signOut();
}
