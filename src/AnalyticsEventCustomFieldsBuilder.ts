export interface AnalyticsEventCustomFields {
	[Enum.AnalyticsCustomFieldKeys.CustomField01.Name]?: string | undefined;
	[Enum.AnalyticsCustomFieldKeys.CustomField02.Name]?: string | undefined;
	[Enum.AnalyticsCustomFieldKeys.CustomField03.Name]?: string | undefined;
}

export class AnalyticsEventCustomFieldsBuilder {
	constructor(
		private field1?: string,
		private field2?: string,
		private field3?: string,
	) {}

	setField1(field1: string) {
		this.field1 = field1;

		return this;
	}

	setField2(field2: string) {
		this.field2 = field2;

		return this;
	}

	setField3(field3: string) {
		this.field3 = field3;

		return this;
	}

	build(): AnalyticsEventCustomFields {
		return {
			[Enum.AnalyticsCustomFieldKeys.CustomField01.Name]: this.field1,
			[Enum.AnalyticsCustomFieldKeys.CustomField02.Name]: this.field2,
			[Enum.AnalyticsCustomFieldKeys.CustomField03.Name]: this.field3,
		};
	}
}
