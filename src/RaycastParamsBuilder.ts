export class RaycastParamsBuilder {
	public filterDescendantsInstances = new Array<Instance>();
	public filterType: Enum.RaycastFilterType = Enum.RaycastFilterType.Blacklist;
	public ignoreWater = false;
	public collisionGroup = "Default";

	public SetFilter(filterDescendantsInstances: Instance[], filterType?: Enum.RaycastFilterType) {
		this.filterDescendantsInstances = filterDescendantsInstances;
		if (filterType) {
			this.filterType = filterType;
		}
		return this;
	}

	public AddToFilter(...filterItem: Instance[]) {
		this.filterDescendantsInstances = [...this.filterDescendantsInstances, ...filterItem];
		return this;
	}

	public RemoveFromFilter(...filterItem: Instance[]) {
		this.filterDescendantsInstances = this.filterDescendantsInstances.filter((f) => !filterItem.includes(f));
		return this;
	}

	public SetIgnoreWater(ignoreWater: boolean) {
		this.ignoreWater = ignoreWater;
		return this;
	}

	public SetCollisionGroup(collisionGroupId: string) {
		this.collisionGroup = collisionGroupId;
		return this;
	}

	public Build() {
		const params = new RaycastParams();
		params.FilterDescendantsInstances = this.filterDescendantsInstances;
		params.CollisionGroup = this.collisionGroup;
		params.FilterType = this.filterType;
		params.IgnoreWater = this.ignoreWater;
		return params;
	}
}
