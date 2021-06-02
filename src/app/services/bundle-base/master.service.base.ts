import {Injector } from '@angular/core';
import {AbstractBundleService} from '../core/services/abstract-bundle-service';
import {AddressTypeService} from './impl/address-type.service';
import {BankTypeService} from './impl/bank-type.service';
import {CompanyTypeService} from './impl/company-type.service';
import {CountryService} from './impl/country.service';
import {DataTypeService} from './impl/data-type.service';
import {DepartmentTypeService} from './impl/department-type.service';
import {DimensionTypeService} from './impl/dimension-type.service';
import {DocumentTypeService} from './impl/document-type.service';
import {DomainEntryService} from './impl/domain-entry.service';
import {DomainTypeService} from './impl/domain-type.service';
import {EducationTypeService} from './impl/education-type.service';
import {EmailTypeService} from './impl/email-type.service';
import {GraduateTypeService} from './impl/graduate-type.service';
import {HobbyTypeService} from './impl/hobby-type.service';
import {IndustryTypeService} from './impl/industry-type.service';
import {LicenseTypeService} from './impl/license-type.service';
import {MeasureEntryService} from './impl/measure-entry.service';
import {NationalTypeService} from './impl/national-type.service';
import {OccupationTypeService} from './impl/occupation-type.service';
import {PartnerTypeService} from './impl/partner-type.service';
import {PhoneTypeService} from './impl/phone-type.service';
import {PositionTypeService} from './impl/position-type.service';
import {ProductEntryService} from './impl/product-entry.service';
import {RelationTypeService} from './impl/relation-type.service';
import {ReligionTypeService} from './impl/religion-type.service';
import {SocialTypeService} from './impl/social-type.service';
import {TerritoryEntryService} from './impl/territory-entry.service';

export class MasterBundleServiceBase extends BundleServiceAbstract {
	protected _addressTypeService: AddressTypeService;
	protected _bankTypeService: BankTypeService;
	protected _companyTypeService: CompanyTypeService;
	protected _countryService: CountryService;
	protected _dataTypeService: DataTypeService;
	protected _departmentTypeService: DepartmentTypeService;
	protected _dimensionTypeService: DimensionTypeService;
	protected _documentTypeService: DocumentTypeService;
	protected _domainService: DomainEntryService;
	protected _domainTypeService: DomainTypeService;
	protected _educationTypeService: EducationTypeService;
	protected _emailTypeService: EmailTypeService;
	protected _graduateTypeService: GraduateTypeService;
	protected _hobbyTypeService: HobbyTypeService;
	protected _industryTypeService: IndustryTypeService;
	protected _licenseTypeService: LicenseTypeService;
	protected _measureService: MeasureEntryService;
	protected _nationalTypeService: NationalTypeService;
	protected _occupationTypeService: OccupationTypeService;
	protected _partnerTypeService: PartnerTypeService;
	protected _phoneTypeService: PhoneTypeService;
	protected _positionTypeService: PositionTypeService;
	protected _productService: ProductEntryService;
	protected _relationTypeService: RelationTypeService;
	protected _religionTypeService: ReligionTypeService;
	protected _socialTypeService: SocialTypeService;
	protected _territoryService: TerritoryEntryService;

	constructor(protected injector: Injector) {
		super(injector);
	}

	get addressTypeService(): AddressTypeService {
		if (!this._addressTypeService) {
			this._addressTypeService = this.injector.get(AddressTypeService);
		}
		return this._addressTypeService;
	}
	get bankTypeService(): BankTypeService {
		if (!this._bankTypeService) {
			this._bankTypeService = this.injector.get(BankTypeService);
		}
		return this._bankTypeService;
	}
	get companyTypeService(): CompanyTypeService {
		if (!this._companyTypeService) {
			this._companyTypeService = this.injector.get(CompanyTypeService);
		}
		return this._companyTypeService;
	}
	get countryService(): CountryService {
		if (!this._countryService) {
			this._countryService = this.injector.get(CountryService);
		}
		return this._countryService;
	}
	get dataTypeService(): DataTypeService {
		if (!this._dataTypeService) {
			this._dataTypeService = this.injector.get(DataTypeService);
		}
		return this._dataTypeService;
	}
	get departmentTypeService(): DepartmentTypeService {
		if (!this._departmentTypeService) {
			this._departmentTypeService = this.injector.get(DepartmentTypeService);
		}
		return this._departmentTypeService;
	}
	get dimensionTypeService(): DimensionTypeService {
		if (!this._dimensionTypeService) {
			this._dimensionTypeService = this.injector.get(DimensionTypeService);
		}
		return this._dimensionTypeService;
	}
	get documentTypeService(): DocumentTypeService {
		if (!this._documentTypeService) {
			this._documentTypeService = this.injector.get(DocumentTypeService);
		}
		return this._documentTypeService;
	}
	get domainService(): DomainEntryService {
		if (!this._domainService) {
			this._domainService = this.injector.get(DomainEntryService);
		}
		return this._domainService;
	}
	get domainTypeService(): DomainTypeService {
		if (!this._domainTypeService) {
			this._domainTypeService = this.injector.get(DomainTypeService);
		}
		return this._domainTypeService;
	}
	get educationTypeService(): EducationTypeService {
		if (!this._educationTypeService) {
			this._educationTypeService = this.injector.get(EducationTypeService);
		}
		return this._educationTypeService;
	}
	get emailTypeService(): EmailTypeService {
		if (!this._emailTypeService) {
			this._emailTypeService = this.injector.get(EmailTypeService);
		}
		return this._emailTypeService;
	}
	get graduateTypeService(): GraduateTypeService {
		if (!this._graduateTypeService) {
			this._graduateTypeService = this.injector.get(GraduateTypeService);
		}
		return this._graduateTypeService;
	}
	get hobbyTypeService(): HobbyTypeService {
		if (!this._hobbyTypeService) {
			this._hobbyTypeService = this.injector.get(HobbyTypeService);
		}
		return this._hobbyTypeService;
	}
	get industryTypeService(): IndustryTypeService {
		if (!this._industryTypeService) {
			this._industryTypeService = this.injector.get(IndustryTypeService);
		}
		return this._industryTypeService;
	}
	get licenseTypeService(): LicenseTypeService {
		if (!this._licenseTypeService) {
			this._licenseTypeService = this.injector.get(LicenseTypeService);
		}
		return this._licenseTypeService;
	}
	get measureService(): MeasureEntryService {
		if (!this._measureService) {
			this._measureService = this.injector.get(MeasureEntryService);
		}
		return this._measureService;
	}
	get nationalTypeService(): NationalTypeService {
		if (!this._nationalTypeService) {
			this._nationalTypeService = this.injector.get(NationalTypeService);
		}
		return this._nationalTypeService;
	}
	get occupationTypeService(): OccupationTypeService {
		if (!this._occupationTypeService) {
			this._occupationTypeService = this.injector.get(OccupationTypeService);
		}
		return this._occupationTypeService;
	}
	get partnerTypeService(): PartnerTypeService {
		if (!this._partnerTypeService) {
			this._partnerTypeService = this.injector.get(PartnerTypeService);
		}
		return this._partnerTypeService;
	}
	get phoneTypeService(): PhoneTypeService {
		if (!this._phoneTypeService) {
			this._phoneTypeService = this.injector.get(PhoneTypeService);
		}
		return this._phoneTypeService;
	}
	get positionTypeService(): PositionTypeService {
		if (!this._positionTypeService) {
			this._positionTypeService = this.injector.get(PositionTypeService);
		}
		return this._positionTypeService;
	}
	get productService(): ProductEntryService {
		if (!this._productService) {
			this._productService = this.injector.get(ProductEntryService);
		}
		return this._productService;
	}
	get relationTypeService(): RelationTypeService {
		if (!this._relationTypeService) {
			this._relationTypeService = this.injector.get(RelationTypeService);
		}
		return this._relationTypeService;
	}
	get religionTypeService(): ReligionTypeService {
		if (!this._religionTypeService) {
			this._religionTypeService = this.injector.get(ReligionTypeService);
		}
		return this._religionTypeService;
	}
	get socialTypeService(): SocialTypeService {
		if (!this._socialTypeService) {
			this._socialTypeService = this.injector.get(SocialTypeService);
		}
		return this._socialTypeService;
	}
	get territoryService(): TerritoryEntryService {
		if (!this._territoryService) {
			this._territoryService = this.injector.get(TerritoryEntryService);
		}
		return this._territoryService;
	}
}
