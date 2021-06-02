import {Injector } from '@angular/core';
import {AbstractBundleService} from '../core/services/abstract-bundle-service';
import {PartnerEducationService} from './impl/partner-education.service';
import {PartnerEntryService} from './impl/partner-entry.service';
import {PartnerExperienceService} from './impl/partner-experience.service';
import {PartnerHobbyService} from './impl/partner-hobby.service';
import {PartnerLicenseService} from './impl/partner-license.service';
import {PartnerRelationService} from './impl/partner-relation.service';

export class PartnerBundleServiceBase extends BundleServiceAbstract {
	protected _partnerEducationService: PartnerEducationService;
	protected _partnerService: PartnerEntryService;
	protected _partnerExperienceService: PartnerExperienceService;
	protected _partnerHobbyService: PartnerHobbyService;
	protected _partnerLicenseService: PartnerLicenseService;
	protected _partnerRelationService: PartnerRelationService;

	constructor(protected injector: Injector) {
		super(injector);
	}

	get partnerEducationService(): PartnerEducationService {
		if (!this._partnerEducationService) {
			this._partnerEducationService = this.injector.get(PartnerEducationService);
		}
		return this._partnerEducationService;
	}
	get partnerService(): PartnerEntryService {
		if (!this._partnerService) {
			this._partnerService = this.injector.get(PartnerEntryService);
		}
		return this._partnerService;
	}
	get partnerExperienceService(): PartnerExperienceService {
		if (!this._partnerExperienceService) {
			this._partnerExperienceService = this.injector.get(PartnerExperienceService);
		}
		return this._partnerExperienceService;
	}
	get partnerHobbyService(): PartnerHobbyService {
		if (!this._partnerHobbyService) {
			this._partnerHobbyService = this.injector.get(PartnerHobbyService);
		}
		return this._partnerHobbyService;
	}
	get partnerLicenseService(): PartnerLicenseService {
		if (!this._partnerLicenseService) {
			this._partnerLicenseService = this.injector.get(PartnerLicenseService);
		}
		return this._partnerLicenseService;
	}
	get partnerRelationService(): PartnerRelationService {
		if (!this._partnerRelationService) {
			this._partnerRelationService = this.injector.get(PartnerRelationService);
		}
		return this._partnerRelationService;
	}
}
