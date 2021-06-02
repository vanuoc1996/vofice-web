import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DefaultComponent} from './default/default.component';

import {AddressTypeTableComponent} from '../../widget/address-type/address-type-table.component';
import {AddressTypeEditComponent} from '../../widget/address-type/address-type-edit.component';
import {BankTypeTableComponent} from '../../widget/bank-type/bank-type-table.component';
import {BankTypeEditComponent} from '../../widget/bank-type/bank-type-edit.component';
import {CompanyTypeTableComponent} from '../../widget/company-type/company-type-table.component';
import {CompanyTypeEditComponent} from '../../widget/company-type/company-type-edit.component';
import {CountryTableComponent} from '../../widget/country/country-table.component';
import {CountryEditComponent} from '../../widget/country/country-edit.component';
import {DataTypeTableComponent} from '../../widget/data-type/data-type-table.component';
import {DataTypeEditComponent} from '../../widget/data-type/data-type-edit.component';
import {DepartmentTypeTableComponent} from '../../widget/department-type/department-type-table.component';
import {DepartmentTypeEditComponent} from '../../widget/department-type/department-type-edit.component';
import {DimensionTypeTableComponent} from '../../widget/dimension-type/dimension-type-table.component';
import {DimensionTypeEditComponent} from '../../widget/dimension-type/dimension-type-edit.component';
import {DocumentTypeTableComponent} from '../../widget/document-type/document-type-table.component';
import {DocumentTypeEditComponent} from '../../widget/document-type/document-type-edit.component';
import {DomainTableComponent} from '../../widget/domain-entry/domain-entry-table.component';
import {DomainEditComponent} from '../../widget/domain-entry/domain-entry-edit.component';
import {DomainTreeComponent} from '../../widget/domain-entry/domain-entry-tree.component';
import {DomainTypeTableComponent} from '../../widget/domain-type/domain-type-table.component';
import {DomainTypeEditComponent} from '../../widget/domain-type/domain-type-edit.component';
import {EducationTypeTableComponent} from '../../widget/education-type/education-type-table.component';
import {EducationTypeEditComponent} from '../../widget/education-type/education-type-edit.component';
import {EmailTypeTableComponent} from '../../widget/email-type/email-type-table.component';
import {EmailTypeEditComponent} from '../../widget/email-type/email-type-edit.component';
import {GraduateTypeTableComponent} from '../../widget/graduate-type/graduate-type-table.component';
import {GraduateTypeEditComponent} from '../../widget/graduate-type/graduate-type-edit.component';
import {HobbyTypeTableComponent} from '../../widget/hobby-type/hobby-type-table.component';
import {HobbyTypeEditComponent} from '../../widget/hobby-type/hobby-type-edit.component';
import {IndustryTypeTableComponent} from '../../widget/industry-type/industry-type-table.component';
import {IndustryTypeEditComponent} from '../../widget/industry-type/industry-type-edit.component';
import {LicenseTypeTableComponent} from '../../widget/license-type/license-type-table.component';
import {LicenseTypeEditComponent} from '../../widget/license-type/license-type-edit.component';
import {MeasureTableComponent} from '../../widget/measure-entry/measure-entry-table.component';
import {MeasureEditComponent} from '../../widget/measure-entry/measure-entry-edit.component';
import {NationalTypeTableComponent} from '../../widget/national-type/national-type-table.component';
import {NationalTypeEditComponent} from '../../widget/national-type/national-type-edit.component';
import {OccupationTypeTableComponent} from '../../widget/occupation-type/occupation-type-table.component';
import {OccupationTypeEditComponent} from '../../widget/occupation-type/occupation-type-edit.component';
import {PartnerTypeTableComponent} from '../../widget/partner-type/partner-type-table.component';
import {PartnerTypeEditComponent} from '../../widget/partner-type/partner-type-edit.component';
import {PhoneTypeTableComponent} from '../../widget/phone-type/phone-type-table.component';
import {PhoneTypeEditComponent} from '../../widget/phone-type/phone-type-edit.component';
import {PositionTypeTableComponent} from '../../widget/position-type/position-type-table.component';
import {PositionTypeEditComponent} from '../../widget/position-type/position-type-edit.component';
import {ProductTableComponent} from '../../widget/product-entry/product-entry-table.component';
import {ProductEditComponent} from '../../widget/product-entry/product-entry-edit.component';
import {ProductTreeComponent} from '../../widget/product-entry/product-entry-tree.component';
import {RelationTypeTableComponent} from '../../widget/relation-type/relation-type-table.component';
import {RelationTypeEditComponent} from '../../widget/relation-type/relation-type-edit.component';
import {ReligionTypeTableComponent} from '../../widget/religion-type/religion-type-table.component';
import {ReligionTypeEditComponent} from '../../widget/religion-type/religion-type-edit.component';
import {SocialTypeTableComponent} from '../../widget/social-type/social-type-table.component';
import {SocialTypeEditComponent} from '../../widget/social-type/social-type-edit.component';
import {TerritoryTableComponent} from '../../widget/territory-entry/territory-entry-table.component';
import {TerritoryEditComponent} from '../../widget/territory-entry/territory-entry-edit.component';
import {TerritoryTreeComponent} from '../../widget/territory-entry/territory-entry-tree.component';
import {PartnerEducationTableComponent} from '../../widget/partner-education/partner-education-table.component';
import {PartnerEducationEditComponent} from '../../widget/partner-education/partner-education-edit.component';
import {PartnerTableComponent} from '../../widget/partner-entry/partner-entry-table.component';
import {PartnerEditComponent} from '../../widget/partner-entry/partner-entry-edit.component';
import {PartnerTreeComponent} from '../../widget/partner-entry/partner-entry-tree.component';
import {PartnerExperienceTableComponent} from '../../widget/partner-experience/partner-experience-table.component';
import {PartnerExperienceEditComponent} from '../../widget/partner-experience/partner-experience-edit.component';
import {PartnerHobbyTableComponent} from '../../widget/partner-hobby/partner-hobby-table.component';
import {PartnerHobbyEditComponent} from '../../widget/partner-hobby/partner-hobby-edit.component';
import {PartnerLicenseTableComponent} from '../../widget/partner-license/partner-license-table.component';
import {PartnerLicenseEditComponent} from '../../widget/partner-license/partner-license-edit.component';
import {PartnerRelationTableComponent} from '../../widget/partner-relation/partner-relation-table.component';
import {PartnerRelationEditComponent} from '../../widget/partner-relation/partner-relation-edit.component';
import {ContactAddressTableComponent} from '../../widget/contact-address/contact-address-table.component';
import {ContactAddressEditComponent} from '../../widget/contact-address/contact-address-edit.component';
import {ContactBankTableComponent} from '../../widget/contact-bank/contact-bank-table.component';
import {ContactBankEditComponent} from '../../widget/contact-bank/contact-bank-edit.component';
import {ContactEmailTableComponent} from '../../widget/contact-email/contact-email-table.component';
import {ContactEmailEditComponent} from '../../widget/contact-email/contact-email-edit.component';
import {ContactPhoneTableComponent} from '../../widget/contact-phone/contact-phone-table.component';
import {ContactPhoneEditComponent} from '../../widget/contact-phone/contact-phone-edit.component';
import {ContactSocialTableComponent} from '../../widget/contact-social/contact-social-table.component';
import {ContactSocialEditComponent} from '../../widget/contact-social/contact-social-edit.component';
import {WorkspaceApprovalTableComponent} from '../../widget/workspace-approval/workspace-approval-table.component';
import {WorkspaceApprovalEditComponent} from '../../widget/workspace-approval/workspace-approval-edit.component';
import {WorkspaceAttachmentTableComponent} from '../../widget/workspace-attachment/workspace-attachment-table.component';
import {WorkspaceAttachmentEditComponent} from '../../widget/workspace-attachment/workspace-attachment-edit.component';
import {WorkspaceCommentTableComponent} from '../../widget/workspace-comment/workspace-comment-table.component';
import {WorkspaceCommentEditComponent} from '../../widget/workspace-comment/workspace-comment-edit.component';
import {WorkspaceTableComponent} from '../../widget/workspace-entry/workspace-entry-table.component';
import {WorkspaceEditComponent} from '../../widget/workspace-entry/workspace-entry-edit.component';
import {WorkspaceTreeComponent} from '../../widget/workspace-entry/workspace-entry-tree.component';
import {WorkspaceMemberTableComponent} from '../../widget/workspace-member/workspace-member-table.component';
import {WorkspaceMemberEditComponent} from '../../widget/workspace-member/workspace-member-edit.component';
import {OrderTypeTableComponent} from '../../widget/order-type/order-type-table.component';
import {OrderTypeEditComponent} from '../../widget/order-type/order-type-edit.component';
import {ProcessActivityTableComponent} from '../../widget/process-activity/process-activity-table.component';
import {ProcessActivityEditComponent} from '../../widget/process-activity/process-activity-edit.component';
import {ProcessChecklistTableComponent} from '../../widget/process-checklist/process-checklist-table.component';
import {ProcessChecklistEditComponent} from '../../widget/process-checklist/process-checklist-edit.component';
import {ProcessTableComponent} from '../../widget/process-entry/process-entry-table.component';
import {ProcessEditComponent} from '../../widget/process-entry/process-entry-edit.component';
import {ProcessOrderTableComponent} from '../../widget/process-order/process-order-table.component';
import {ProcessOrderEditComponent} from '../../widget/process-order/process-order-edit.component';
import {ProcessStageTableComponent} from '../../widget/process-stage/process-stage-table.component';
import {ProcessStageEditComponent} from '../../widget/process-stage/process-stage-edit.component';

const routes: Routes = [
	{path: '', redirectTo: 'dashboard'},
	{path: 'dashboard', component: DefaultComponent},
	{
		path: 'address-type-table',
		component: AddressTypeTableComponent
	},
	{
		path: 'address-type-edit',
		component: AddressTypeEditComponent
	},
	{
		path: 'bank-type-table',
		component: BankTypeTableComponent
	},
	{
		path: 'bank-type-edit',
		component: BankTypeEditComponent
	},
	{
		path: 'company-type-table',
		component: CompanyTypeTableComponent
	},
	{
		path: 'company-type-edit',
		component: CompanyTypeEditComponent
	},
	{
		path: 'country-table',
		component: CountryTableComponent
	},
	{
		path: 'country-edit',
		component: CountryEditComponent
	},
	{
		path: 'data-type-table',
		component: DataTypeTableComponent
	},
	{
		path: 'data-type-edit',
		component: DataTypeEditComponent
	},
	{
		path: 'department-type-table',
		component: DepartmentTypeTableComponent
	},
	{
		path: 'department-type-edit',
		component: DepartmentTypeEditComponent
	},
	{
		path: 'dimension-type-table',
		component: DimensionTypeTableComponent
	},
	{
		path: 'dimension-type-edit',
		component: DimensionTypeEditComponent
	},
	{
		path: 'document-type-table',
		component: DocumentTypeTableComponent
	},
	{
		path: 'document-type-edit',
		component: DocumentTypeEditComponent
	},
	{
		path: 'domain-table',
		component: DomainTableComponent
	},
	{
		path: 'domain-edit',
		component: DomainEditComponent
	},
	{
		path: 'domain-tree',
		component: DomainTreeComponent
	},
	{
		path: 'domain-type-table',
		component: DomainTypeTableComponent
	},
	{
		path: 'domain-type-edit',
		component: DomainTypeEditComponent
	},
	{
		path: 'education-type-table',
		component: EducationTypeTableComponent
	},
	{
		path: 'education-type-edit',
		component: EducationTypeEditComponent
	},
	{
		path: 'email-type-table',
		component: EmailTypeTableComponent
	},
	{
		path: 'email-type-edit',
		component: EmailTypeEditComponent
	},
	{
		path: 'graduate-type-table',
		component: GraduateTypeTableComponent
	},
	{
		path: 'graduate-type-edit',
		component: GraduateTypeEditComponent
	},
	{
		path: 'hobby-type-table',
		component: HobbyTypeTableComponent
	},
	{
		path: 'hobby-type-edit',
		component: HobbyTypeEditComponent
	},
	{
		path: 'industry-type-table',
		component: IndustryTypeTableComponent
	},
	{
		path: 'industry-type-edit',
		component: IndustryTypeEditComponent
	},
	{
		path: 'license-type-table',
		component: LicenseTypeTableComponent
	},
	{
		path: 'license-type-edit',
		component: LicenseTypeEditComponent
	},
	{
		path: 'measure-table',
		component: MeasureTableComponent
	},
	{
		path: 'measure-edit',
		component: MeasureEditComponent
	},
	{
		path: 'national-type-table',
		component: NationalTypeTableComponent
	},
	{
		path: 'national-type-edit',
		component: NationalTypeEditComponent
	},
	{
		path: 'occupation-type-table',
		component: OccupationTypeTableComponent
	},
	{
		path: 'occupation-type-edit',
		component: OccupationTypeEditComponent
	},
	{
		path: 'partner-type-table',
		component: PartnerTypeTableComponent
	},
	{
		path: 'partner-type-edit',
		component: PartnerTypeEditComponent
	},
	{
		path: 'phone-type-table',
		component: PhoneTypeTableComponent
	},
	{
		path: 'phone-type-edit',
		component: PhoneTypeEditComponent
	},
	{
		path: 'position-type-table',
		component: PositionTypeTableComponent
	},
	{
		path: 'position-type-edit',
		component: PositionTypeEditComponent
	},
	{
		path: 'product-table',
		component: ProductTableComponent
	},
	{
		path: 'product-edit',
		component: ProductEditComponent
	},
	{
		path: 'product-tree',
		component: ProductTreeComponent
	},
	{
		path: 'relation-type-table',
		component: RelationTypeTableComponent
	},
	{
		path: 'relation-type-edit',
		component: RelationTypeEditComponent
	},
	{
		path: 'religion-type-table',
		component: ReligionTypeTableComponent
	},
	{
		path: 'religion-type-edit',
		component: ReligionTypeEditComponent
	},
	{
		path: 'social-type-table',
		component: SocialTypeTableComponent
	},
	{
		path: 'social-type-edit',
		component: SocialTypeEditComponent
	},
	{
		path: 'territory-table',
		component: TerritoryTableComponent
	},
	{
		path: 'territory-edit',
		component: TerritoryEditComponent
	},
	{
		path: 'territory-tree',
		component: TerritoryTreeComponent
	},
	{
		path: 'partner-education-table',
		component: PartnerEducationTableComponent
	},
	{
		path: 'partner-education-edit',
		component: PartnerEducationEditComponent
	},
	{
		path: 'partner-table',
		component: PartnerTableComponent
	},
	{
		path: 'partner-edit',
		component: PartnerEditComponent
	},
	{
		path: 'partner-tree',
		component: PartnerTreeComponent
	},
	{
		path: 'partner-experience-table',
		component: PartnerExperienceTableComponent
	},
	{
		path: 'partner-experience-edit',
		component: PartnerExperienceEditComponent
	},
	{
		path: 'partner-hobby-table',
		component: PartnerHobbyTableComponent
	},
	{
		path: 'partner-hobby-edit',
		component: PartnerHobbyEditComponent
	},
	{
		path: 'partner-license-table',
		component: PartnerLicenseTableComponent
	},
	{
		path: 'partner-license-edit',
		component: PartnerLicenseEditComponent
	},
	{
		path: 'partner-relation-table',
		component: PartnerRelationTableComponent
	},
	{
		path: 'partner-relation-edit',
		component: PartnerRelationEditComponent
	},
	{
		path: 'contact-address-table',
		component: ContactAddressTableComponent
	},
	{
		path: 'contact-address-edit',
		component: ContactAddressEditComponent
	},
	{
		path: 'contact-bank-table',
		component: ContactBankTableComponent
	},
	{
		path: 'contact-bank-edit',
		component: ContactBankEditComponent
	},
	{
		path: 'contact-email-table',
		component: ContactEmailTableComponent
	},
	{
		path: 'contact-email-edit',
		component: ContactEmailEditComponent
	},
	{
		path: 'contact-phone-table',
		component: ContactPhoneTableComponent
	},
	{
		path: 'contact-phone-edit',
		component: ContactPhoneEditComponent
	},
	{
		path: 'contact-social-table',
		component: ContactSocialTableComponent
	},
	{
		path: 'contact-social-edit',
		component: ContactSocialEditComponent
	},
	{
		path: 'workspace-approval-table',
		component: WorkspaceApprovalTableComponent
	},
	{
		path: 'workspace-approval-edit',
		component: WorkspaceApprovalEditComponent
	},
	{
		path: 'workspace-attachment-table',
		component: WorkspaceAttachmentTableComponent
	},
	{
		path: 'workspace-attachment-edit',
		component: WorkspaceAttachmentEditComponent
	},
	{
		path: 'workspace-comment-table',
		component: WorkspaceCommentTableComponent
	},
	{
		path: 'workspace-comment-edit',
		component: WorkspaceCommentEditComponent
	},
	{
		path: 'workspace-table',
		component: WorkspaceTableComponent
	},
	{
		path: 'workspace-edit',
		component: WorkspaceEditComponent
	},
	{
		path: 'workspace-tree',
		component: WorkspaceTreeComponent
	},
	{
		path: 'workspace-member-table',
		component: WorkspaceMemberTableComponent
	},
	{
		path: 'workspace-member-edit',
		component: WorkspaceMemberEditComponent
	},
	{
		path: 'order-type-table',
		component: OrderTypeTableComponent
	},
	{
		path: 'order-type-edit',
		component: OrderTypeEditComponent
	},
	{
		path: 'process-activity-table',
		component: ProcessActivityTableComponent
	},
	{
		path: 'process-activity-edit',
		component: ProcessActivityEditComponent
	},
	{
		path: 'process-checklist-table',
		component: ProcessChecklistTableComponent
	},
	{
		path: 'process-checklist-edit',
		component: ProcessChecklistEditComponent
	},
	{
		path: 'process-table',
		component: ProcessTableComponent
	},
	{
		path: 'process-edit',
		component: ProcessEditComponent
	},
	{
		path: 'process-order-table',
		component: ProcessOrderTableComponent
	},
	{
		path: 'process-order-edit',
		component: ProcessOrderEditComponent
	},
	{
		path: 'process-stage-table',
		component: ProcessStageTableComponent
	},
	{
		path: 'process-stage-edit',
		component: ProcessStageEditComponent
	},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DashboardsRoutingModule {
}
