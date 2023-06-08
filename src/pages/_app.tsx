import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Layout from "~/components/layout";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        minHeight: "100vh",
        bg: mode(
          "rgb(46,2,109)",
          "rgb(46,2,109);-moz-linear-gradient(180deg, rgb(46, 2, 109), rgb(21, 22, 44));-webkit-linear-gradient(180deg, rgb(46, 2, 109), rgb(21, 22, 44));linear-gradient(180deg, rgb(46, 2, 109), rgb(21, 22, 44));"
        )(props),
        filter:
          'progid:DXImageTransform.Microsoft.gradient(startColorstr="#2e026d",endColorstr="#15162c",GradientType=1);',
      },
    }),
  },
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    // <WagmiConfig config={config}>
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ChakraProvider>
    // </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
