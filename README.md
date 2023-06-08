# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project but that incorporates Chakra-UI and user login and password with prisma.

## Installation

1. Run the installation with: `yarn`
2. Make a copy of `.env.example` to `.env` and fill in: `NEXTAUTH_SECRET` and `NEXTAUTH_URL`
3. Run the seeding to create users and posts: `yarn migrate/seed` you can find the passwords in: `prisma/seed.ts`
4. If you want to configure Discord Login you can add the API info in: `.env` and uncomment the discord config in `src/server/auth.ts`

## Boilerplate Examples

This boilerplate shares a few different aspects of T3 while making a few changes.

### Menu

You can find in `src/components/menu.tsx` a basic menu with items and sub items as well as Signin and Signup.

You can also specify if items are to be shown when authed.

### Signin & Signup

This currently has nextauth which can integrate many login system: [NextAuth.js](https://next-auth.js.org)

This template was also configured to allow signin / signup with email and password. You can view the settings in: `src/server/auth.ts`

### Dynamic Routing

There is a good example of dynamic routing with routes such as: `/posts/aslkj20jkw0m2` or `/posts/[id]`.

This can be found in: `src/pages/posts/[id].tsx`

You can see how to handle parameters.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Chakra UI](https://chakra-ui.com/)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## Author

Template based off: https://create.t3.gg/

Modified by: Burlet Mederic

Github: https://github.com/crimson-med
