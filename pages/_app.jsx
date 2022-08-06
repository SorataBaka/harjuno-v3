import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
	const themeObj = {
		colors: {},
		fonts: {
			body: "Roboto Mono, monospace",
			heading: "Roboto Mono, monospace",
			monospace: "Roboto Mono, monospace",
		},
	};

	const theme = extendTheme(themeObj);
	return (
		<>
			<ChakraProvider theme={theme}>
				<Box
					minH={"100vh"}
					display={"flex"}
					flexDir={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					backgroundColor={"gray.800"}
					color={"yellow.300"}
				>
					<Component {...pageProps} />
				</Box>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
