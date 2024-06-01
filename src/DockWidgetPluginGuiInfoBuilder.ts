export class DockWidgetPluginGuiInfoBuilder {
	public initDockState: Enum.InitialDockState = Enum.InitialDockState.Right;
	public initEnabled = false;
	public overrideEnabledRestore = false;
	public floatXSize = 0;
	public floatYSize = 0;
	public minWidth = 0;
	public minHeight = 0;

	public SetInitDockState(initDockState: Enum.InitialDockState) {
		this.initDockState = initDockState;
		return;
	}

	public SetInitEnabled(initEnabled: boolean) {
		this.initEnabled = initEnabled;
		return;
	}

	public SetOverrideEnabledRestore(overrideEnabledRestore: boolean) {
		this.overrideEnabledRestore = overrideEnabledRestore;
		return;
	}

	public SetFloatXSize(floatXSize: number) {
		this.floatXSize = floatXSize;
		return;
	}

	public SetFloatYSize(floatYSize: number) {
		this.floatYSize = floatYSize;
		return;
	}

	public SetMinWidth(minWidth: number) {
		this.minWidth = minWidth;
		return;
	}

	public SetMinHeight(minHeight: number) {
		this.minHeight = minHeight;
		return;
	}

	public Build() {
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
