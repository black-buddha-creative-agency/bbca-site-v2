import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request): Promise<never> {
	draftMode().disable();
	redirect(`/studio`);
}
