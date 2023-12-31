import prismadb from "@/lib/prismadb";
import React from "react";
import BillboardForm from "./components/BillboardForm";

export default async function BillboardPage({
	params,
}: {
	params: { billboardId: string };
}) {
	const billboard = await prismadb.billboard.findUnique({
		where: { id: params.billboardId },
	});

	return (
		<div className="flex-col">
			<div className="flex-1 p-8 pt-6 space-y-4">
				<BillboardForm initialData={billboard} />
			</div>
		</div>
	);
}
