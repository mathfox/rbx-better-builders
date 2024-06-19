import variantModule, {
	type TypeNames,
	type VariantOf,
	fields,
	match,
} from "@rbxts/variant";

export const TeleportOptionsVariant = variantModule({
	ReservedServerAccessCode: fields<{
		code: string;
	}>(),

	ServerInstanceId: fields<{
		serverInstanceId: string;
	}>(),

	ShouldReserveServer: fields<{
		shouldReserveServer: boolean;
	}>(),
});

export type TeleportOptionsVariant<
	T extends TypeNames<typeof TeleportOptionsVariant> = undefined,
> = VariantOf<typeof TeleportOptionsVariant, T>;

class TeleportOptionsBuilderFinal {
	private teleportData?: object;
	private teleportOptionsVariant?: TeleportOptionsVariant;

	constructor(variant?: TeleportOptionsVariant) {
		this.teleportOptionsVariant = variant;
	}

	setTeleportData<T extends { [P in string]: unknown }>(value: T) {
		this.teleportData = value;

		return this;
	}

	build() {
		const teleportOptions = new Instance("TeleportOptions");

		if (this.teleportData) {
			teleportOptions.SetTeleportData(this.teleportData);
		}

		if (this.teleportOptionsVariant) {
			match(this.teleportOptionsVariant, {
				ReservedServerAccessCode: ({ code }) => {
					teleportOptions.ReservedServerAccessCode = code;
				},

				ServerInstanceId: ({ serverInstanceId }) => {
					teleportOptions.ServerInstanceId = serverInstanceId;
				},

				ShouldReserveServer: ({ shouldReserveServer }) => {
					teleportOptions.ShouldReserveServer = shouldReserveServer;
				},
			});
		}

		return teleportOptions;
	}
}

export class TeleportOptionsBuilder extends TeleportOptionsBuilderFinal {
	setTeleportOptionsVariant(variant: TeleportOptionsVariant) {
		return new TeleportOptionsBuilderFinal(variant);
	}
}
