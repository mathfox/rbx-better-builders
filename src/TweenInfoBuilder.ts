export class TweenInfoBuilder {
	private time = 1;
	private easingStyle: Enum.EasingStyle = Enum.EasingStyle.Quad;
	private easingDirection: Enum.EasingDirection = Enum.EasingDirection.Out;
	private repeatCount = 0;
	private reverses = false;
	private delayTime = 0;

	setTime(time: number) {
		this.time = time;

		return this;
	}

	setEasingStyle(easingStyle: Enum.EasingStyle) {
		this.easingStyle = easingStyle;

		return this;
	}

	setEasingDirection(easingDirection: Enum.EasingDirection) {
		this.easingDirection = easingDirection;

		return this;
	}

	setRepeatCount(repeatCount: number) {
		this.repeatCount = repeatCount;

		return this;
	}

	setReverses(reverses: boolean) {
		this.reverses = reverses;

		return this;
	}

	setDelayTime(delayTime: number) {
		this.delayTime = delayTime;

		return this;
	}

	build() {
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
