export class DockWidgetPluginGuiInfoBuilder {
	initDockState: Enum.InitialDockState = Enum.InitialDockState.Right;
	initEnabled = false;
	overrideEnabledRestore = false;
	floatXSize = 0;
	floatYSize = 0;
	minWidth = 0;
	minHeight = 0;

	setInitDockState(initDockState: Enum.InitialDockState) {
		this.initDockState = initDockState;

		return;
	}

	setInitEnabled(initEnabled: boolean) {
		this.initEnabled = initEnabled;

		return;
	}

	setOverrideEnabledRestore(overrideEnabledRestore: boolean) {
		this.overrideEnabledRestore = overrideEnabledRestore;

		return;
	}

	setFloatXSize(floatXSize: number) {
		this.floatXSize = floatXSize;

		return;
	}

	setFloatYSize(floatYSize: number) {
		this.floatYSize = floatYSize;

		return;
	}

	setMinWidth(minWidth: number) {
		this.minWidth = minWidth;

		return;
	}

	setMinHeight(minHeight: number) {
		this.minHeight = minHeight;

		return;
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
