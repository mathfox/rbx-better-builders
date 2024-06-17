export class DockWidgetPluginGuiInfoBuilder {
	private initDockState: Enum.InitialDockState = Enum.InitialDockState.Right;
	private initEnabled = false;
	private overrideEnabledRestore = false;
	private floatXSize = 0;
	private floatYSize = 0;
	private minWidth = 0;
	private minHeight = 0;

	setInitDockState(initDockState: Enum.InitialDockState) {
		this.initDockState = initDockState;

		return this;
	}

	setInitEnabled(initEnabled: boolean) {
		this.initEnabled = initEnabled;

		return this;
	}

	setOverrideEnabledRestore(overrideEnabledRestore: boolean) {
		this.overrideEnabledRestore = overrideEnabledRestore;

		return this;
	}

	setFloatXSize(floatXSize: number) {
		this.floatXSize = floatXSize;

		return this;
	}

	setFloatYSize(floatYSize: number) {
		this.floatYSize = floatYSize;

		return this;
	}

	setMinWidth(minWidth: number) {
		this.minWidth = minWidth;

		return this;
	}

	setMinHeight(minHeight: number) {
		this.minHeight = minHeight;

		return this;
	}

	build() {
		return new DockWidgetPluginGuiInfo(
			this.initDockState,
			this.initEnabled,
			this.overrideEnabledRestore,
			this.floatXSize,
			this.floatYSize,
			this.minWidth,
			this.minHeight,
		);
	}
}
