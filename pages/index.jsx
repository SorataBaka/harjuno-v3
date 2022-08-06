import { NextSeo } from "next-seo";
import { Box, Heading } from "@chakra-ui/react";
export default function Home() {
	return (
		<>
			<NextSeo
				title="Christian Harjuno"
				description="Christian Harjuno is a full-stack developer with a passion for making life simple and efficient. He is currently making custom tools to suit the needs of his clients."
				canonical="https://tianharjuno.com"
			/>
			<Box
				display={"flex"}
				flexDir={"row"}
				justifyContent={"center"}
				alignItems={"center"}
				backgroundColor={"gray.700"}
				minWidth={"50%"}
				p={20}
				borderRadius={15}
			>
				<Heading size={"xl"}>Christian Harjuno</Heading>
			</Box>
		</>
	);
}
