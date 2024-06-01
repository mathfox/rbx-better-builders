export class ExperienceInviteOptionsBuilder {
	private promptMessage?: string;
	private launchData?: string;
	private inviteUser?: number;
	private inviteMessageId?: string;

	setPromptMessage(promptMessage: string) {
		this.promptMessage = promptMessage;

		return this;
	}

	setLaunchData(launchData: string) {
		this.launchData = launchData;

		return this;
	}

	setInviteUser(inviteUser: number) {
		this.inviteUser = inviteUser;

		return this;
	}

	setInviteMessageId(inviteMessageId: string) {
		this.inviteMessageId = inviteMessageId;

		return this;
	}

	build() {
		const options = new Instance("ExperienceInviteOptions");

		if (this.promptMessage !== undefined) {
			options.PromptMessage = this.promptMessage;
		}

		if (this.launchData !== undefined) {
			options.LaunchData = this.launchData;
		}

		if (this.inviteUser !== undefined) {
			options.InviteUser = this.inviteUser;
		}

		if (this.inviteMessageId !== undefined) {
			options.InviteMessageId = this.inviteMessageId;
		}

		return options;
	}
}
