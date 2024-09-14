enum TeleportOptionsFlag {
	ReservedServerAccessCode = 1 << 0,
	ServerInstanceId = 1 << 1,
	ShouldReserveServer = 1 << 2,
}

export class TeleportOptionsBuilder {
	private flags: TeleportOptionsFlag = 0 as TeleportOptionsFlag;

	private teleportData?: object;
	private reservedServerAccessCode?: string;
	private serverInstanceId?: string;
	private shouldReserveServer?: boolean;

	setReservedServerAccessCode(
		code: string,
	): Omit<
		TeleportOptionsBuilder,
		"setShouldReserveServer" | "setServerInstanceId"
	> {
		assert(
			(this.flags & TeleportOptionsFlag.ShouldReserveServer) === 0,
			"Cannot contain 'ShouldReserveServer'",
		);
		assert(
			(this.flags & TeleportOptionsFlag.ServerInstanceId) === 0,
			"Cannot contain 'ServerInstanceId'",
		);

		this.reservedServerAccessCode = code;
		this.flags |= TeleportOptionsFlag.ReservedServerAccessCode;
		return this;
	}

	setServerInstanceId(
		serverInstanceId: string,
	): Omit<
		TeleportOptionsBuilder,
		"setReservedServerAccessCode" | "setShouldReserveServer"
	> {
		assert(
			(this.flags & TeleportOptionsFlag.ReservedServerAccessCode) === 0,
			"Cannot contain 'ReservedServerAccessCode'",
		);
		assert(
			(this.flags & TeleportOptionsFlag.ShouldReserveServer) === 0,
			"Cannot contain 'ShouldReserveServer'",
		);

		this.serverInstanceId = serverInstanceId;
		this.flags |= TeleportOptionsFlag.ServerInstanceId;
		return this;
	}

	setShouldReserveServer(
		shouldReserveServer: boolean,
	): Omit<
		TeleportOptionsBuilder,
		"setReservedServerAccessCode" | "setServerInstanceId"
	> {
		assert(
			(this.flags & TeleportOptionsFlag.ReservedServerAccessCode) === 0,
			"Cannot contain 'ReservedServerAccessCode'",
		);
		assert(
			(this.flags & TeleportOptionsFlag.ServerInstanceId) === 0,
			"Cannot contain 'ServerInstanceId'",
		);

		this.shouldReserveServer = shouldReserveServer;
		this.flags |= TeleportOptionsFlag.ShouldReserveServer;
		return this;
	}

	setTeleportData<T extends { [P in string]: unknown }>(value: T) {
		this.teleportData = value;
		return this;
	}

	build() {
		const teleportOptions = new Instance("TeleportOptions");

		if (this.teleportData) teleportOptions.SetTeleportData(this.teleportData);

		if (this.shouldReserveServer)
			teleportOptions.ShouldReserveServer = this.shouldReserveServer;

		if (this.serverInstanceId !== undefined)
			teleportOptions.ServerInstanceId = this.serverInstanceId;

		if (this.reservedServerAccessCode !== undefined)
			teleportOptions.ReservedServerAccessCode = this.reservedServerAccessCode;

		return teleportOptions;
	}
}
