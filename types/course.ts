export interface CustomField {
  name: string;
  shortname: string;
  type: string;
  value: string | null;
  valueraw: string | null;
}

export interface Contact {
  id: number;
  fullname: string;
}

export interface OverviewFile {
  filename: string;
  fileurl: string;
  mimetype: string;
  filesize?: number;
  timemodified?: number;
}

export interface Course {
  id: number;
  fullname: string;
  displayname: string;
  shortname: string;
  courseimage: string;
  categoryid: number;
  categoryname: string;
  summary: string;
  startdate: number;
  enddate: number;
  visible: number; // 1 = Available, 0 = Hidden
  enrollmentmethods: string[]; // e.g., ['manual', 'self']
  customfields: CustomField[];
  contacts: Contact[];
  overviewfiles: OverviewFile[];
}
