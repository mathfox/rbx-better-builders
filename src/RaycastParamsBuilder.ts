export class RaycastParamsBuilder {
	private filterDescendantsInstances = new Array<Instance>();
	private filterType?: Enum.RaycastFilterType;
	private ignoreWater?: boolean;
	private collisionGroup?: string;
	private respectCanCollide?: boolean;
	private bruteForceAllSlow?: boolean;

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

	removeFromFilter(instances: Instance | Instance[]) {
		const filterPredicate = typeIs(instances, "Instance")
			? (value: Instance) => value !== instances
			: (value: Instance) => !instances.includes(value);

		this.filterDescendantsInstances = this.filterDescendantsInstances.filter(filterPredicate);

		return this;
	}

	setIgnoreWater(ignoreWater: boolean) {
		this.ignoreWater = ignoreWater;

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
		const params = new RaycastParams();

		params.FilterDescendantsInstances = this.filterDescendantsInstances;

		if (this.collisionGroup !== undefined) {
			params.CollisionGroup = this.collisionGroup;
		}

		if (this.filterType) {
			params.FilterType = this.filterType;
		}

		if (this.ignoreWater !== undefined) {
			params.IgnoreWater = this.ignoreWater;
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
