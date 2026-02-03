export interface MoodleWarning {
  item: string;
  itemid: number;
  warningcode: string;
  message: string;
}

export interface MoodleAPIResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  courses: any[];
  success?: boolean;
  id?: number;
  userid?: number;
  username?: string;
  exception?: string;
  errorcode?: string;
  message?: string;
  warnings?: MoodleWarning[];
}

interface CategoryCriteria {
  key: string;
  value: string;
}

export interface GetCategoriesParams {
  criteria?: CategoryCriteria[];
  addsubcategories?: boolean;
}

export interface Contact {
  id: number;
  fullname: string;
}

export interface CustomField {
  name: string;
  shortname: string;
  type: string;
  valueraw: string;
  value: string | null;
}

export interface OverviewFile {
  filename: string;
  filepath: string;
  filesize: number;
  fileurl: string;
  timemodified: number;
  mimetype: string;
}

export interface Course {
  id: number;
  fullname: string;
  displayname: string;
  shortname: string;
  courseimage: string;
  categoryid: number;
  categoryname: string;
  sortorder: number;
  summary: string;
  summaryformat: number;
  overviewfiles: OverviewFile[];
  contacts: Contact[];
  enrollmentmethods: string[];
  customfields: CustomField[];
  showactivitydates: number;
  showcompletionconditions: number;
  startdate: number;
  enddate: number;
  visible: number;
  enablecompletion: number;
  timecreated: number;
  timemodified: number;
}

export interface CourseCategory {
  id: number;
  name: string;
  description: string;
  descriptionformat: number;
  parent: number;
  sortorder: number;
  coursecount: number;
  depth: number;
  path: string;
  exception?: string;
  errorcode?: string;
  message?: string;
}

export interface CoursesByFieldParams {
  field: "id" | "ids" | "shortname" | "idnumber" | "category";
  value: string;
}

export interface GetCoursesByFieldResponse {
  courses: Course[];
  warnings: string[];
}