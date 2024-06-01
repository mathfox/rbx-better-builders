export class TweenInfoBuilder {
	public easingDirection: Enum.EasingDirection = Enum.EasingDirection.Out;
	public easingStyle: Enum.EasingStyle = Enum.EasingStyle.Quad;
	public time = 1;
	public repeatCount = 0;
	public reverses = false;
	public delayTime = 0;

	public SetEasingDirection(easingDirection: Enum.EasingDirection) {
		this.easingDirection = easingDirection;
		return this;
	}

	public SetTime(time: number) {
		this.time = time;
		return this;
	}

	public SetDelayTime(delayTime: number) {
		this.delayTime = delayTime;
		return this;
	}

	public SetReverses(reverses: boolean) {
		this.reverses = reverses;
		return this;
	}

	public SetRepeatCount(repeatCount: number) {
		this.repeatCount = repeatCount;
		return this;
	}

	public SetEasingStyle(easingStyle: Enum.EasingStyle) {
		this.easingStyle = easingStyle;
		return this;
	}

	public Build() {
		return new TweenInfo(
			this.time,
			this.easingStyle,
			this.easingDirection,
			this.repeatCount,
			this.reverses,
			this.delayTime,
		);
	}
}
