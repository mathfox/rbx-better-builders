export class OverlapParamsBuilder {
	private filterDescendantsInstances = new Array<Instance>();
	private filterType?: Enum.RaycastFilterType;
	private maxParts?: number;
	private collisionGroup?: string;
	private respectCanCollide?: boolean;
	private bruteForceAllSlow?: boolean;

	setFilter(filteredInstance: Instance, filterType?: Enum.RaycastFilterType): OverlapParamsBuilder;

	setFilter(filterDescendantsInstances: Instance[], filterType?: Enum.RaycastFilterType): OverlapParamsBuilder;

	setFilter(filterDescendantsInstances: Instance | Instance[], filterType?: Enum.RaycastFilterType) {
		if (typeIs(filterDescendantsInstances, "Instance")) {
			this.filterDescendantsInstances = [filterDescendantsInstances];
		} else {
			this.filterDescendantsInstances = filterDescendantsInstances;
		}

		if (filterType) {
			this.filterType = filterType;
		}

		return this;
	}

	addToFilter(instance: Instance): OverlapParamsBuilder;

	addToFilter(instances: Instance[]): OverlapParamsBuilder;

	addToFilter(instances: Instance | Instance[]) {
		if (typeIs(instances, "Instance")) {
			this.filterDescendantsInstances.push(instances);
		} else {
			instances.forEach((value) => {
				this.filterDescendantsInstances.push(value);
			});
		}

		return this;
	}

	removeFromFilter(instance: Instance): OverlapParamsBuilder;

	removeFromFilter(instances: Instance[]): OverlapParamsBuilder;

	removeFromFilter(instances: Instance | Instance[]) {
		const filterPredicate = typeIs(instances, "Instance")
			? (value: Instance) => value !== instances
			: (value: Instance) => !instances.includes(value);

		this.filterDescendantsInstances = this.filterDescendantsInstances.filter(filterPredicate);

		return this;
	}

	setMaxParts(maxParts: number) {
		this.maxParts = maxParts;

		return this;
	}

	setCollisionGroup(collisionGroup: string) {
		this.collisionGroup = collisionGroup;

		return this;
	}

	setRespectCanCollide(respectCanCollide: boolean) {
		this.respectCanCollide = respectCanCollide;

		return this;
	}

	setBruteForceAllSlow(bruteForceAllSlow: boolean) {
		this.bruteForceAllSlow = bruteForceAllSlow;

		return this;
	}

	build() {
		const params = new OverlapParams();

		params.FilterDescendantsInstances = this.filterDescendantsInstances;

		if (this.filterType) {
			params.FilterType = this.filterType;
		}

		if (this.collisionGroup !== undefined) {
			params.CollisionGroup = this.collisionGroup;
		}

		if (this.maxParts !== undefined) {
			params.MaxParts = this.maxParts;
		}

		if (this.respectCanCollide !== undefined) {
			params.RespectCanCollide = this.respectCanCollide;
		}

		if (this.bruteForceAllSlow !== undefined) {
			params.BruteForceAllSlow = this.bruteForceAllSlow;
		}

		return params;
	}
}
