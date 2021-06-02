import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {DashboardsRoutingModule} from './dashboards-routing.module';
import {UIModule} from '../../shared/ui/ui.module';
import {WidgetModule} from '../../shared/widget/widget.module';

import {NgbDropdownModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {TranslateModule} from '@ngx-translate/core';

import {PrimeNGModule} from './primeng.module';

import {DefaultComponent} from './default/default.component';
import {SampleComponent} from './sample/sample.component';
import {AddressTypeTableComponent} from '../../widget/address-type/address-type-table.component';
import {AddressTypeEditComponent} from '../../widget/address-type/address-type-edit.component';
import {AddressTypeSelectComponent} from '../../widget/address-type/address-type-select.component';
import {AddressTypeAutoCompleteComponent} from '../../widget/address-type/address-type-auto-complete.component';
import {BankTypeTableComponent} from '../../widget/bank-type/bank-type-table.component';
import {BankTypeEditComponent} from '../../widget/bank-type/bank-type-edit.component';
import {BankTypeSelectComponent} from '../../widget/bank-type/bank-type-select.component';
import {BankTypeAutoCompleteComponent} from '../../widget/bank-type/bank-type-auto-complete.component';
import {CompanyTypeTableComponent} from '../../widget/company-type/company-type-table.component';
import {CompanyTypeEditComponent} from '../../widget/company-type/company-type-edit.component';
import {CompanyTypeSelectComponent} from '../../widget/company-type/company-type-select.component';
import {CompanyTypeAutoCompleteComponent} from '../../widget/company-type/company-type-auto-complete.component';
import {CountryTableComponent} from '../../widget/country/country-table.component';
import {CountryEditComponent} from '../../widget/country/country-edit.component';
import {CountrySelectComponent} from '../../widget/country/country-select.component';
import {CountryAutoCompleteComponent} from '../../widget/country/country-auto-complete.component';
import {DataTypeTableComponent} from '../../widget/data-type/data-type-table.component';
import {DataTypeEditComponent} from '../../widget/data-type/data-type-edit.component';
import {DataTypeSelectComponent} from '../../widget/data-type/data-type-select.component';
import {DataTypeAutoCompleteComponent} from '../../widget/data-type/data-type-auto-complete.component';
import {DepartmentTypeTableComponent} from '../../widget/department-type/department-type-table.component';
import {DepartmentTypeEditComponent} from '../../widget/department-type/department-type-edit.component';
import {DepartmentTypeSelectComponent} from '../../widget/department-type/department-type-select.component';
import {DepartmentTypeAutoCompleteComponent} from '../../widget/department-type/department-type-auto-complete.component';
import {DimensionTypeTableComponent} from '../../widget/dimension-type/dimension-type-table.component';
import {DimensionTypeEditComponent} from '../../widget/dimension-type/dimension-type-edit.component';
import {DimensionTypeSelectComponent} from '../../widget/dimension-type/dimension-type-select.component';
import {DimensionTypeAutoCompleteComponent} from '../../widget/dimension-type/dimension-type-auto-complete.component';
import {DocumentTypeTableComponent} from '../../widget/document-type/document-type-table.component';
import {DocumentTypeEditComponent} from '../../widget/document-type/document-type-edit.component';
import {DocumentTypeSelectComponent} from '../../widget/document-type/document-type-select.component';
import {DocumentTypeAutoCompleteComponent} from '../../widget/document-type/document-type-auto-complete.component';
import {DomainTableComponent} from '../../widget/domain-entry/domain-entry-table.component';
import {DomainEditComponent} from '../../widget/domain-entry/domain-entry-edit.component';
import {DomainSelectComponent} from '../../widget/domain-entry/domain-entry-select.component';
import {DomainAutoCompleteComponent} from '../../widget/domain-entry/domain-entry-auto-complete.component';
import {DomainTreeComponent} from '../../widget/domain-entry/domain-entry-tree.component';
import {DomainTypeTableComponent} from '../../widget/domain-type/domain-type-table.component';
import {DomainTypeEditComponent} from '../../widget/domain-type/domain-type-edit.component';
import {DomainTypeSelectComponent} from '../../widget/domain-type/domain-type-select.component';
import {DomainTypeAutoCompleteComponent} from '../../widget/domain-type/domain-type-auto-complete.component';
import {EducationTypeTableComponent} from '../../widget/education-type/education-type-table.component';
import {EducationTypeEditComponent} from '../../widget/education-type/education-type-edit.component';
import {EducationTypeSelectComponent} from '../../widget/education-type/education-type-select.component';
import {EducationTypeAutoCompleteComponent} from '../../widget/education-type/education-type-auto-complete.component';
import {EmailTypeTableComponent} from '../../widget/email-type/email-type-table.component';
import {EmailTypeEditComponent} from '../../widget/email-type/email-type-edit.component';
import {EmailTypeSelectComponent} from '../../widget/email-type/email-type-select.component';
import {EmailTypeAutoCompleteComponent} from '../../widget/email-type/email-type-auto-complete.component';
import {GraduateTypeTableComponent} from '../../widget/graduate-type/graduate-type-table.component';
import {GraduateTypeEditComponent} from '../../widget/graduate-type/graduate-type-edit.component';
import {GraduateTypeSelectComponent} from '../../widget/graduate-type/graduate-type-select.component';
import {GraduateTypeAutoCompleteComponent} from '../../widget/graduate-type/graduate-type-auto-complete.component';
import {HobbyTypeTableComponent} from '../../widget/hobby-type/hobby-type-table.component';
import {HobbyTypeEditComponent} from '../../widget/hobby-type/hobby-type-edit.component';
import {HobbyTypeSelectComponent} from '../../widget/hobby-type/hobby-type-select.component';
import {HobbyTypeAutoCompleteComponent} from '../../widget/hobby-type/hobby-type-auto-complete.component';
import {IndustryTypeTableComponent} from '../../widget/industry-type/industry-type-table.component';
import {IndustryTypeEditComponent} from '../../widget/industry-type/industry-type-edit.component';
import {IndustryTypeSelectComponent} from '../../widget/industry-type/industry-type-select.component';
import {IndustryTypeAutoCompleteComponent} from '../../widget/industry-type/industry-type-auto-complete.component';
import {LicenseTypeTableComponent} from '../../widget/license-type/license-type-table.component';
import {LicenseTypeEditComponent} from '../../widget/license-type/license-type-edit.component';
import {LicenseTypeSelectComponent} from '../../widget/license-type/license-type-select.component';
import {LicenseTypeAutoCompleteComponent} from '../../widget/license-type/license-type-auto-complete.component';
import {MeasureTableComponent} from '../../widget/measure-entry/measure-entry-table.component';
import {MeasureEditComponent} from '../../widget/measure-entry/measure-entry-edit.component';
import {MeasureSelectComponent} from '../../widget/measure-entry/measure-entry-select.component';
import {MeasureAutoCompleteComponent} from '../../widget/measure-entry/measure-entry-auto-complete.component';
import {NationalTypeTableComponent} from '../../widget/national-type/national-type-table.component';
import {NationalTypeEditComponent} from '../../widget/national-type/national-type-edit.component';
import {NationalTypeSelectComponent} from '../../widget/national-type/national-type-select.component';
import {NationalTypeAutoCompleteComponent} from '../../widget/national-type/national-type-auto-complete.component';
import {OccupationTypeTableComponent} from '../../widget/occupation-type/occupation-type-table.component';
import {OccupationTypeEditComponent} from '../../widget/occupation-type/occupation-type-edit.component';
import {OccupationTypeSelectComponent} from '../../widget/occupation-type/occupation-type-select.component';
import {OccupationTypeAutoCompleteComponent} from '../../widget/occupation-type/occupation-type-auto-complete.component';
import {PartnerTypeTableComponent} from '../../widget/partner-type/partner-type-table.component';
import {PartnerTypeEditComponent} from '../../widget/partner-type/partner-type-edit.component';
import {PartnerTypeSelectComponent} from '../../widget/partner-type/partner-type-select.component';
import {PartnerTypeAutoCompleteComponent} from '../../widget/partner-type/partner-type-auto-complete.component';
import {PhoneTypeTableComponent} from '../../widget/phone-type/phone-type-table.component';
import {PhoneTypeEditComponent} from '../../widget/phone-type/phone-type-edit.component';
import {PhoneTypeSelectComponent} from '../../widget/phone-type/phone-type-select.component';
import {PhoneTypeAutoCompleteComponent} from '../../widget/phone-type/phone-type-auto-complete.component';
import {PositionTypeTableComponent} from '../../widget/position-type/position-type-table.component';
import {PositionTypeEditComponent} from '../../widget/position-type/position-type-edit.component';
import {PositionTypeSelectComponent} from '../../widget/position-type/position-type-select.component';
import {PositionTypeAutoCompleteComponent} from '../../widget/position-type/position-type-auto-complete.component';
import {ProductTableComponent} from '../../widget/product-entry/product-entry-table.component';
import {ProductEditComponent} from '../../widget/product-entry/product-entry-edit.component';
import {ProductSelectComponent} from '../../widget/product-entry/product-entry-select.component';
import {ProductAutoCompleteComponent} from '../../widget/product-entry/product-entry-auto-complete.component';
import {ProductTreeComponent} from '../../widget/product-entry/product-entry-tree.component';
import {RelationTypeTableComponent} from '../../widget/relation-type/relation-type-table.component';
import {RelationTypeEditComponent} from '../../widget/relation-type/relation-type-edit.component';
import {RelationTypeSelectComponent} from '../../widget/relation-type/relation-type-select.component';
import {RelationTypeAutoCompleteComponent} from '../../widget/relation-type/relation-type-auto-complete.component';
import {ReligionTypeTableComponent} from '../../widget/religion-type/religion-type-table.component';
import {ReligionTypeEditComponent} from '../../widget/religion-type/religion-type-edit.component';
import {ReligionTypeSelectComponent} from '../../widget/religion-type/religion-type-select.component';
import {ReligionTypeAutoCompleteComponent} from '../../widget/religion-type/religion-type-auto-complete.component';
import {SocialTypeTableComponent} from '../../widget/social-type/social-type-table.component';
import {SocialTypeEditComponent} from '../../widget/social-type/social-type-edit.component';
import {SocialTypeSelectComponent} from '../../widget/social-type/social-type-select.component';
import {SocialTypeAutoCompleteComponent} from '../../widget/social-type/social-type-auto-complete.component';
import {TerritoryTableComponent} from '../../widget/territory-entry/territory-entry-table.component';
import {TerritoryEditComponent} from '../../widget/territory-entry/territory-entry-edit.component';
import {TerritorySelectComponent} from '../../widget/territory-entry/territory-entry-select.component';
import {TerritoryAutoCompleteComponent} from '../../widget/territory-entry/territory-entry-auto-complete.component';
import {TerritoryTreeComponent} from '../../widget/territory-entry/territory-entry-tree.component';
import {PartnerEducationTableComponent} from '../../widget/partner-education/partner-education-table.component';
import {PartnerEducationEditComponent} from '../../widget/partner-education/partner-education-edit.component';
import {PartnerEducationSelectComponent} from '../../widget/partner-education/partner-education-select.component';
import {PartnerEducationAutoCompleteComponent} from '../../widget/partner-education/partner-education-auto-complete.component';
import {PartnerTableComponent} from '../../widget/partner-entry/partner-entry-table.component';
import {PartnerEditComponent} from '../../widget/partner-entry/partner-entry-edit.component';
import {PartnerSelectComponent} from '../../widget/partner-entry/partner-entry-select.component';
import {PartnerAutoCompleteComponent} from '../../widget/partner-entry/partner-entry-auto-complete.component';
import {PartnerTreeComponent} from '../../widget/partner-entry/partner-entry-tree.component';
import {PartnerExperienceTableComponent} from '../../widget/partner-experience/partner-experience-table.component';
import {PartnerExperienceEditComponent} from '../../widget/partner-experience/partner-experience-edit.component';
import {PartnerExperienceSelectComponent} from '../../widget/partner-experience/partner-experience-select.component';
import {PartnerExperienceAutoCompleteComponent} from '../../widget/partner-experience/partner-experience-auto-complete.component';
import {PartnerHobbyTableComponent} from '../../widget/partner-hobby/partner-hobby-table.component';
import {PartnerHobbyEditComponent} from '../../widget/partner-hobby/partner-hobby-edit.component';
import {PartnerHobbySelectComponent} from '../../widget/partner-hobby/partner-hobby-select.component';
import {PartnerHobbyAutoCompleteComponent} from '../../widget/partner-hobby/partner-hobby-auto-complete.component';
import {PartnerLicenseTableComponent} from '../../widget/partner-license/partner-license-table.component';
import {PartnerLicenseEditComponent} from '../../widget/partner-license/partner-license-edit.component';
import {PartnerLicenseSelectComponent} from '../../widget/partner-license/partner-license-select.component';
import {PartnerLicenseAutoCompleteComponent} from '../../widget/partner-license/partner-license-auto-complete.component';
import {PartnerRelationTableComponent} from '../../widget/partner-relation/partner-relation-table.component';
import {PartnerRelationEditComponent} from '../../widget/partner-relation/partner-relation-edit.component';
import {PartnerRelationSelectComponent} from '../../widget/partner-relation/partner-relation-select.component';
import {PartnerRelationAutoCompleteComponent} from '../../widget/partner-relation/partner-relation-auto-complete.component';
import {ContactAddressTableComponent} from '../../widget/contact-address/contact-address-table.component';
import {ContactAddressEditComponent} from '../../widget/contact-address/contact-address-edit.component';
import {ContactAddressSelectComponent} from '../../widget/contact-address/contact-address-select.component';
import {ContactAddressAutoCompleteComponent} from '../../widget/contact-address/contact-address-auto-complete.component';
import {ContactBankTableComponent} from '../../widget/contact-bank/contact-bank-table.component';
import {ContactBankEditComponent} from '../../widget/contact-bank/contact-bank-edit.component';
import {ContactBankSelectComponent} from '../../widget/contact-bank/contact-bank-select.component';
import {ContactBankAutoCompleteComponent} from '../../widget/contact-bank/contact-bank-auto-complete.component';
import {ContactEmailTableComponent} from '../../widget/contact-email/contact-email-table.component';
import {ContactEmailEditComponent} from '../../widget/contact-email/contact-email-edit.component';
import {ContactEmailSelectComponent} from '../../widget/contact-email/contact-email-select.component';
import {ContactEmailAutoCompleteComponent} from '../../widget/contact-email/contact-email-auto-complete.component';
import {ContactPhoneTableComponent} from '../../widget/contact-phone/contact-phone-table.component';
import {ContactPhoneEditComponent} from '../../widget/contact-phone/contact-phone-edit.component';
import {ContactPhoneSelectComponent} from '../../widget/contact-phone/contact-phone-select.component';
import {ContactPhoneAutoCompleteComponent} from '../../widget/contact-phone/contact-phone-auto-complete.component';
import {ContactSocialTableComponent} from '../../widget/contact-social/contact-social-table.component';
import {ContactSocialEditComponent} from '../../widget/contact-social/contact-social-edit.component';
import {ContactSocialSelectComponent} from '../../widget/contact-social/contact-social-select.component';
import {ContactSocialAutoCompleteComponent} from '../../widget/contact-social/contact-social-auto-complete.component';
import {WorkspaceApprovalTableComponent} from '../../widget/workspace-approval/workspace-approval-table.component';
import {WorkspaceApprovalEditComponent} from '../../widget/workspace-approval/workspace-approval-edit.component';
import {WorkspaceApprovalSelectComponent} from '../../widget/workspace-approval/workspace-approval-select.component';
import {WorkspaceApprovalAutoCompleteComponent} from '../../widget/workspace-approval/workspace-approval-auto-complete.component';
import {WorkspaceAttachmentTableComponent} from '../../widget/workspace-attachment/workspace-attachment-table.component';
import {WorkspaceAttachmentEditComponent} from '../../widget/workspace-attachment/workspace-attachment-edit.component';
import {WorkspaceAttachmentSelectComponent} from '../../widget/workspace-attachment/workspace-attachment-select.component';
import {WorkspaceAttachmentAutoCompleteComponent} from '../../widget/workspace-attachment/workspace-attachment-auto-complete.component';
import {WorkspaceCommentTableComponent} from '../../widget/workspace-comment/workspace-comment-table.component';
import {WorkspaceCommentEditComponent} from '../../widget/workspace-comment/workspace-comment-edit.component';
import {WorkspaceCommentSelectComponent} from '../../widget/workspace-comment/workspace-comment-select.component';
import {WorkspaceCommentAutoCompleteComponent} from '../../widget/workspace-comment/workspace-comment-auto-complete.component';
import {WorkspaceTableComponent} from '../../widget/workspace-entry/workspace-entry-table.component';
import {WorkspaceEditComponent} from '../../widget/workspace-entry/workspace-entry-edit.component';
import {WorkspaceSelectComponent} from '../../widget/workspace-entry/workspace-entry-select.component';
import {WorkspaceAutoCompleteComponent} from '../../widget/workspace-entry/workspace-entry-auto-complete.component';
import {WorkspaceTreeComponent} from '../../widget/workspace-entry/workspace-entry-tree.component';
import {WorkspaceMemberTableComponent} from '../../widget/workspace-member/workspace-member-table.component';
import {WorkspaceMemberEditComponent} from '../../widget/workspace-member/workspace-member-edit.component';
import {WorkspaceMemberSelectComponent} from '../../widget/workspace-member/workspace-member-select.component';
import {WorkspaceMemberAutoCompleteComponent} from '../../widget/workspace-member/workspace-member-auto-complete.component';
import {OrderTypeTableComponent} from '../../widget/order-type/order-type-table.component';
import {OrderTypeEditComponent} from '../../widget/order-type/order-type-edit.component';
import {OrderTypeSelectComponent} from '../../widget/order-type/order-type-select.component';
import {OrderTypeAutoCompleteComponent} from '../../widget/order-type/order-type-auto-complete.component';
import {ProcessActivityTableComponent} from '../../widget/process-activity/process-activity-table.component';
import {ProcessActivityEditComponent} from '../../widget/process-activity/process-activity-edit.component';
import {ProcessActivitySelectComponent} from '../../widget/process-activity/process-activity-select.component';
import {ProcessActivityAutoCompleteComponent} from '../../widget/process-activity/process-activity-auto-complete.component';
import {ProcessChecklistTableComponent} from '../../widget/process-checklist/process-checklist-table.component';
import {ProcessChecklistEditComponent} from '../../widget/process-checklist/process-checklist-edit.component';
import {ProcessChecklistSelectComponent} from '../../widget/process-checklist/process-checklist-select.component';
import {ProcessChecklistAutoCompleteComponent} from '../../widget/process-checklist/process-checklist-auto-complete.component';
import {ProcessTableComponent} from '../../widget/process-entry/process-entry-table.component';
import {ProcessEditComponent} from '../../widget/process-entry/process-entry-edit.component';
import {ProcessSelectComponent} from '../../widget/process-entry/process-entry-select.component';
import {ProcessAutoCompleteComponent} from '../../widget/process-entry/process-entry-auto-complete.component';
import {ProcessOrderTableComponent} from '../../widget/process-order/process-order-table.component';
import {ProcessOrderEditComponent} from '../../widget/process-order/process-order-edit.component';
import {ProcessOrderSelectComponent} from '../../widget/process-order/process-order-select.component';
import {ProcessOrderAutoCompleteComponent} from '../../widget/process-order/process-order-auto-complete.component';
import {ProcessStageTableComponent} from '../../widget/process-stage/process-stage-table.component';
import {ProcessStageEditComponent} from '../../widget/process-stage/process-stage-edit.component';
import {ProcessStageSelectComponent} from '../../widget/process-stage/process-stage-select.component';
import {ProcessStageAutoCompleteComponent} from '../../widget/process-stage/process-stage-auto-complete.component';

@NgModule({
	declarations: [
		DefaultComponent,
		SampleComponent,
		AddressTypeTableComponent,
		AddressTypeEditComponent,
		AddressTypeSelectComponent,
		AddressTypeAutoCompleteComponent,
		BankTypeTableComponent,
		BankTypeEditComponent,
		BankTypeSelectComponent,
		BankTypeAutoCompleteComponent,
		CompanyTypeTableComponent,
		CompanyTypeEditComponent,
		CompanyTypeSelectComponent,
		CompanyTypeAutoCompleteComponent,
		CountryTableComponent,
		CountryEditComponent,
		CountrySelectComponent,
		CountryAutoCompleteComponent,
		DataTypeTableComponent,
		DataTypeEditComponent,
		DataTypeSelectComponent,
		DataTypeAutoCompleteComponent,
		DepartmentTypeTableComponent,
		DepartmentTypeEditComponent,
		DepartmentTypeSelectComponent,
		DepartmentTypeAutoCompleteComponent,
		DimensionTypeTableComponent,
		DimensionTypeEditComponent,
		DimensionTypeSelectComponent,
		DimensionTypeAutoCompleteComponent,
		DocumentTypeTableComponent,
		DocumentTypeEditComponent,
		DocumentTypeSelectComponent,
		DocumentTypeAutoCompleteComponent,
		DomainTableComponent,
		DomainEditComponent,
		DomainSelectComponent,
		DomainAutoCompleteComponent,
		DomainTreeComponent,
		DomainTypeTableComponent,
		DomainTypeEditComponent,
		DomainTypeSelectComponent,
		DomainTypeAutoCompleteComponent,
		EducationTypeTableComponent,
		EducationTypeEditComponent,
		EducationTypeSelectComponent,
		EducationTypeAutoCompleteComponent,
		EmailTypeTableComponent,
		EmailTypeEditComponent,
		EmailTypeSelectComponent,
		EmailTypeAutoCompleteComponent,
		GraduateTypeTableComponent,
		GraduateTypeEditComponent,
		GraduateTypeSelectComponent,
		GraduateTypeAutoCompleteComponent,
		HobbyTypeTableComponent,
		HobbyTypeEditComponent,
		HobbyTypeSelectComponent,
		HobbyTypeAutoCompleteComponent,
		IndustryTypeTableComponent,
		IndustryTypeEditComponent,
		IndustryTypeSelectComponent,
		IndustryTypeAutoCompleteComponent,
		LicenseTypeTableComponent,
		LicenseTypeEditComponent,
		LicenseTypeSelectComponent,
		LicenseTypeAutoCompleteComponent,
		MeasureTableComponent,
		MeasureEditComponent,
		MeasureSelectComponent,
		MeasureAutoCompleteComponent,
		NationalTypeTableComponent,
		NationalTypeEditComponent,
		NationalTypeSelectComponent,
		NationalTypeAutoCompleteComponent,
		OccupationTypeTableComponent,
		OccupationTypeEditComponent,
		OccupationTypeSelectComponent,
		OccupationTypeAutoCompleteComponent,
		PartnerTypeTableComponent,
		PartnerTypeEditComponent,
		PartnerTypeSelectComponent,
		PartnerTypeAutoCompleteComponent,
		PhoneTypeTableComponent,
		PhoneTypeEditComponent,
		PhoneTypeSelectComponent,
		PhoneTypeAutoCompleteComponent,
		PositionTypeTableComponent,
		PositionTypeEditComponent,
		PositionTypeSelectComponent,
		PositionTypeAutoCompleteComponent,
		ProductTableComponent,
		ProductEditComponent,
		ProductSelectComponent,
		ProductAutoCompleteComponent,
		ProductTreeComponent,
		RelationTypeTableComponent,
		RelationTypeEditComponent,
		RelationTypeSelectComponent,
		RelationTypeAutoCompleteComponent,
		ReligionTypeTableComponent,
		ReligionTypeEditComponent,
		ReligionTypeSelectComponent,
		ReligionTypeAutoCompleteComponent,
		SocialTypeTableComponent,
		SocialTypeEditComponent,
		SocialTypeSelectComponent,
		SocialTypeAutoCompleteComponent,
		TerritoryTableComponent,
		TerritoryEditComponent,
		TerritorySelectComponent,
		TerritoryAutoCompleteComponent,
		TerritoryTreeComponent,
		PartnerEducationTableComponent,
		PartnerEducationEditComponent,
		PartnerEducationSelectComponent,
		PartnerEducationAutoCompleteComponent,
		PartnerTableComponent,
		PartnerEditComponent,
		PartnerSelectComponent,
		PartnerAutoCompleteComponent,
		PartnerTreeComponent,
		PartnerExperienceTableComponent,
		PartnerExperienceEditComponent,
		PartnerExperienceSelectComponent,
		PartnerExperienceAutoCompleteComponent,
		PartnerHobbyTableComponent,
		PartnerHobbyEditComponent,
		PartnerHobbySelectComponent,
		PartnerHobbyAutoCompleteComponent,
		PartnerLicenseTableComponent,
		PartnerLicenseEditComponent,
		PartnerLicenseSelectComponent,
		PartnerLicenseAutoCompleteComponent,
		PartnerRelationTableComponent,
		PartnerRelationEditComponent,
		PartnerRelationSelectComponent,
		PartnerRelationAutoCompleteComponent,
		ContactAddressTableComponent,
		ContactAddressEditComponent,
		ContactAddressSelectComponent,
		ContactAddressAutoCompleteComponent,
		ContactBankTableComponent,
		ContactBankEditComponent,
		ContactBankSelectComponent,
		ContactBankAutoCompleteComponent,
		ContactEmailTableComponent,
		ContactEmailEditComponent,
		ContactEmailSelectComponent,
		ContactEmailAutoCompleteComponent,
		ContactPhoneTableComponent,
		ContactPhoneEditComponent,
		ContactPhoneSelectComponent,
		ContactPhoneAutoCompleteComponent,
		ContactSocialTableComponent,
		ContactSocialEditComponent,
		ContactSocialSelectComponent,
		ContactSocialAutoCompleteComponent,
		WorkspaceApprovalTableComponent,
		WorkspaceApprovalEditComponent,
		WorkspaceApprovalSelectComponent,
		WorkspaceApprovalAutoCompleteComponent,
		WorkspaceAttachmentTableComponent,
		WorkspaceAttachmentEditComponent,
		WorkspaceAttachmentSelectComponent,
		WorkspaceAttachmentAutoCompleteComponent,
		WorkspaceCommentTableComponent,
		WorkspaceCommentEditComponent,
		WorkspaceCommentSelectComponent,
		WorkspaceCommentAutoCompleteComponent,
		WorkspaceTableComponent,
		WorkspaceEditComponent,
		WorkspaceSelectComponent,
		WorkspaceAutoCompleteComponent,
		WorkspaceTreeComponent,
		WorkspaceMemberTableComponent,
		WorkspaceMemberEditComponent,
		WorkspaceMemberSelectComponent,
		WorkspaceMemberAutoCompleteComponent,
		OrderTypeTableComponent,
		OrderTypeEditComponent,
		OrderTypeSelectComponent,
		OrderTypeAutoCompleteComponent,
		ProcessActivityTableComponent,
		ProcessActivityEditComponent,
		ProcessActivitySelectComponent,
		ProcessActivityAutoCompleteComponent,
		ProcessChecklistTableComponent,
		ProcessChecklistEditComponent,
		ProcessChecklistSelectComponent,
		ProcessChecklistAutoCompleteComponent,
		ProcessTableComponent,
		ProcessEditComponent,
		ProcessSelectComponent,
		ProcessAutoCompleteComponent,
		ProcessOrderTableComponent,
		ProcessOrderEditComponent,
		ProcessOrderSelectComponent,
		ProcessOrderAutoCompleteComponent,
		ProcessStageTableComponent,
		ProcessStageEditComponent,
		ProcessStageSelectComponent,
		ProcessStageAutoCompleteComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		RouterModule,
		DashboardsRoutingModule,
		UIModule,
		WidgetModule,
		NgbDropdownModule,
		NgbTooltipModule,
		NgbNavModule,
		NgApexchartsModule,
		PerfectScrollbarModule,
		PrimeNGModule
	]
})
export class DashboardsModule {
}
