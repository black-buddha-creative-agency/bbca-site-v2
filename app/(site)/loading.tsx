"use client";
import { Oval } from "react-loader-spinner";
import { COLORS } from "@/constants";

export default function Loading() {
	return (
		<div className="flex justify-center items-center h-screen">
			<Oval height={80} width={80} color={COLORS.PRIMARY} />
		</div>
	);
}
