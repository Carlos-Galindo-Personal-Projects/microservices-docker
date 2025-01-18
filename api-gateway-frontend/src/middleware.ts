import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware (request: NextRequest){
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/no-auth/login', request.url));
    }

    try {
        const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);

        const { payload } = await jwtVerify(token, secretKey);

        const requestHeaders = new Headers(request.headers);

        const name = payload.name as string;

        requestHeaders.set('User-Name', name);

        return NextResponse.next({
            request: {
                headers: requestHeaders
            }
        });
    } catch {
        return NextResponse.redirect(new URL('/no-auth/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/auth/:path*',
};
