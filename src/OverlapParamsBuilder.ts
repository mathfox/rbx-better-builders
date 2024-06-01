export class OverlapParamsBuilder {
	private filterDescendantsInstances = new Array<Instance>();
	private filterType: Enum.RaycastFilterType | undefined = undefined;
	private maxParts: number | undefined = undefined;
	private collisionGroup: string | undefined = undefined;
	private respectCanCollide: boolean | undefined = undefined;
	private bruteForceAllSlow: boolean | undefined = undefined;

	constructor() {}

	setFilter(filterDescendantsInstances: Instance[], filterType?: Enum.RaycastFilterType) {
		this.filterDescendantsInstances = filterDescendantsInstances;

		if (filterType) {
			this.filterType = filterType;
		}

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
