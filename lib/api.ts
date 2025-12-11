import axios from "axios";

export interface RegisterUserPayload {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  city?: string;
  country: string;
  auth?: string;
}

export interface MoodleAPIResponse {
  success?: boolean;
  userid?: number;
  username?: string;
  exception?: string;
  errorcode?: string;
  message?: string;
}

interface CategoryCriteria {
  key: string;
  value: string;
}

interface GetCategoriesParams {
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

interface CourseCategory {
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

export async function registerUser(
  userData: RegisterUserPayload
): Promise<MoodleAPIResponse> {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const wstoken = process.env.NEXT_PUBLIC_WS_TOKEN;
  const wsfunction = process.env.NEXT_PUBLIC_WS_FUNCTION;
  const moodlewsrestformat = process.env.NEXT_PUBLIC_MOODLE_REST_FORMAT;

  console.log("base url:", base_url);

  if (!base_url || !wstoken || !wsfunction || !moodlewsrestformat) {
    throw new Error("Missing required environment variables");
  }

  const formData = new FormData();
  formData.append("wstoken", wstoken);
  formData.append("moodlewsrestformat", moodlewsrestformat);
  formData.append("wsfunction", wsfunction);
  formData.append("users[0][username]", userData.username);
  formData.append("users[0][password]", userData.password);
  formData.append("users[0][firstname]", userData.firstName);
  formData.append("users[0][lastname]", userData.lastName);
  formData.append("users[0][email]", userData.email);

  if (userData.city) {
    formData.append("users[0][city]", userData.city);
  }

  if (userData.country) {
    formData.append("users[0][country]", userData.country);
  }

  if (userData.auth) {
    formData.append("users[0][auth]", userData.auth);
  }

  try {
    const response = await axios.post<MoodleAPIResponse>(base_url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = response.data;

    if (data.exception || data.errorcode) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Registration API error:", errorMessage);
      throw new Error(errorMessage);
    }
    console.error("Registration API error:", error);
    throw error;
  }
}

export async function getCourseCategories(
  params: GetCategoriesParams = {}
): Promise<CourseCategory[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const wsToken = process.env.NEXT_PUBLIC_WS_TOKEN;
  const moodleRestFormat = process.env.NEXT_PUBLIC_MOODLE_REST_FORMAT_COURSE;

  if (!baseUrl || !wsToken || !moodleRestFormat) {
    throw new Error("Missing required environment variables");
  }

  const formData = new FormData();
  formData.append("wstoken", wsToken);
  formData.append("moodlewsrestformat", moodleRestFormat);
  formData.append("wsfunction", "core_course_get_categories");

  if (params.criteria && params.criteria.length > 0) {
    params.criteria.forEach((criterion, index) => {
      formData.append(`criteria[${index}][key]`, criterion.key);
      formData.append(`criteria[${index}][value]`, criterion.value);
    });
  } else {
    formData.append("criteria[0][key]", "id");
    formData.append("criteria[0][value]", "");
  }

  formData.append(
    "addsubcategories",
    params.addsubcategories !== undefined
      ? String(Number(params.addsubcategories))
      : ""
  );

  try {
    const response = await axios.post<CourseCategory[]>(baseUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = response.data;

    if (Array.isArray(data) && data.length > 0) {
      const firstItem = data[0];
      if (firstItem.exception || firstItem.errorcode) {
        throw new Error(firstItem.message || "Failed to fetch categories");
      }
    }

    console.log("Course Categories Response:", data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Get Categories API error:", errorMessage);
      throw new Error(errorMessage);
    }
    console.error("Get Categories API error:", error);
    throw error;
  }
}

export async function getCoursesByField(
  params: CoursesByFieldParams
): Promise<GetCoursesByFieldResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const wsToken = process.env.NEXT_PUBLIC_WS_TOKEN;
  const moodleRestFormat = process.env.NEXT_PUBLIC_MOODLE_REST_FORMAT_COURSE;

  if (!baseUrl || !wsToken || !moodleRestFormat) {
    throw new Error("Missing required environment variables");
  }

  const formData = new FormData();
  formData.append("wstoken", wsToken);
  formData.append("moodlewsrestformat", moodleRestFormat);
  formData.append("wsfunction", "core_course_get_courses_by_field");
  formData.append("field", params.field);
  formData.append("value", params.value);

  try {
    const response = await axios.post(baseUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Raw API Response Type:", typeof response.data);
    console.log("Courses by Field Response:", response.data);

    if (typeof response.data === "string" && response.data.includes("<?xml")) {
      throw new Error(
        "API returned XML instead of JSON. Please check your NEXT_PUBLIC_MOODLE_REST_FORMAT environment variable. It should be set to 'json', not 'xml'."
      );
    }

    const data: GetCoursesByFieldResponse = response.data;

    if (data.warnings && data.warnings.length > 0) {
      console.warn("API Warnings:", data.warnings);
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      console.error("Get Courses API error:", errorMessage);
      throw new Error(errorMessage);
    }
    console.error("Get Courses API error:", error);
    throw error;
  }
}
