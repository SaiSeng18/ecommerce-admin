"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	loading: boolean;
}

export default function AlertModal({
	isOpen,
	onClose,
	onConfirm,
	loading,
}: AlertModalProps) {
	const [isMounted, setIsMounted] = useState(false);

	return (
		<Modal
			title="Are you sure?"
			description="This action cannot be undone."
			isOpen={isOpen}
			onClose={onClose}>
			<div className="flex items-center justify-end w-full pt-6 space-x-2">
				<Button disabled={loading} variant="outline" onClick={onClose}>
					Cancel
				</Button>
				<Button disabled={loading} variant="destructive" onClick={onConfirm}>
					Continue
				</Button>
			</div>
		</Modal>
	);
}
