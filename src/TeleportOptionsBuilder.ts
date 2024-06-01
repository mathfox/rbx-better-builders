const enum TeleportOptionsFlag {
	ReservedServerAccessCode = 1 << 0,
	ServerInstanceId = 1 << 1,
	ShouldReserveServer = 1 << 2,
}

export class TeleportOptionsBuilder {
	private flags: TeleportOptionsFlag = 0;

	private teleportData?: object;
	private reservedServerAccessCode?: string;
	private serverInstanceId?: string;
	private shouldReserveServer?: boolean;

	public SetReservedServerAccessCode(
		code: string,
	): Omit<TeleportOptionsBuilder, "SetShouldReserveServer" | "SetServerInstanceId"> {
		assert((this.flags & TeleportOptionsFlag.ShouldReserveServer) === 0, "Cannot contain 'ShouldReserveServer'");
		assert((this.flags & TeleportOptionsFlag.ServerInstanceId) === 0, "Cannot contain 'ServerInstanceId'");

		this.reservedServerAccessCode = code;
		this.flags |= TeleportOptionsFlag.ReservedServerAccessCode;
		return this;
	}

	public SetServerInstanceId(
		serverInstanceId: string,
	): Omit<TeleportOptionsBuilder, "SetReservedServerAccessCode" | "SetShouldReserveServer"> {
		assert(
			(this.flags & TeleportOptionsFlag.ReservedServerAccessCode) === 0,
			"Cannot contain 'ReservedServerAccessCode'",
		);
		assert((this.flags & TeleportOptionsFlag.ShouldReserveServer) === 0, "Cannot contain 'ShouldReserveServer'");

		this.serverInstanceId = serverInstanceId;
		this.flags |= TeleportOptionsFlag.ServerInstanceId;
		return this;
	}

	public SetShouldReserveServer(
		shouldReserveServer: boolean,
	): Omit<TeleportOptionsBuilder, "SetReservedServerAccessCode" | "SetServerInstanceId"> {
		assert(
			(this.flags & TeleportOptionsFlag.ReservedServerAccessCode) === 0,
			"Cannot contain 'ReservedServerAccessCode'",
		);
		assert((this.flags & TeleportOptionsFlag.ServerInstanceId) === 0, "Cannot contain 'ServerInstanceId'");

		this.shouldReserveServer = shouldReserveServer;
		this.flags |= TeleportOptionsFlag.ShouldReserveServer;
		return this;
	}

	public SetTeleportData<T extends { [P in string]: unknown }>(value: T) {
		this.teleportData = value;
		return this;
	}

	public Build() {
		const teleportOptions = new Instance("TeleportOptions");
		if (this.teleportData) teleportOptions.SetTeleportData(this.teleportData);
		if (this.shouldReserveServer) teleportOptions.ShouldReserveServer = this.shouldReserveServer;
		if (this.serverInstanceId !== undefined) teleportOptions.ServerInstanceId = this.serverInstanceId;
		if (this.reservedServerAccessCode !== undefined)
			teleportOptions.ReservedServerAccessCode = this.reservedServerAccessCode;
		return teleportOptions;
	}
}
