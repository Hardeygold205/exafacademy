import axios from "axios";
import type {
  MoodleAPIResponse,
  GetCategoriesParams,
  CourseCategory,
  CoursesByFieldParams,
  GetCoursesByFieldResponse,
} from "@/types/course";
import type {
  RegisterUserPayload,
  LoginUserPayload,
} from "@/types/register-login";

export async function registerUser(
  userData: RegisterUserPayload,
): Promise<MoodleAPIResponse> {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const wstoken = process.env.NEXT_PUBLIC_WS_TOKEN;
  const wsfunction = process.env.NEXT_PUBLIC_WS_FUNCTION;
  const moodlewsrestformat = process.env.NEXT_PUBLIC_MOODLE_REST_FORMAT;

  if (!base_url || !wstoken || !wsfunction || !moodlewsrestformat) {
    throw new Error("Missing required environment variables");
  }

  const formData = new FormData();
  formData.append("wstoken", wstoken);
  formData.append("moodlewsrestformat", moodlewsrestformat);
  formData.append("wsfunction", wsfunction);
  formData.append("username", userData.username);
  formData.append("password", userData.password);
  formData.append("firstname", userData.firstName);
  formData.append("lastname", userData.lastName);
  formData.append("email", userData.email);

  if (userData.city) {
    formData.append("city", userData.city);
  }

  if (userData.country) {
    formData.append("country", userData.country);
  }

  if (userData.auth) {
    formData.append("auth", userData.auth);
  }

  let customFieldIndex = 0;

  if (userData.gender) {
    formData.append(
      `customprofilefields[${customFieldIndex}][type]`,
      "profile_field_gender",
    );
    formData.append(
      `customprofilefields[${customFieldIndex}][name]`,
      "profile_field_gender",
    );
    formData.append(
      `customprofilefields[${customFieldIndex}][value]`,
      userData.gender,
    );
    customFieldIndex++;
  }

  if (userData.occupation) {
    formData.append(
      `customprofilefields[${customFieldIndex}][type]`,
      "profile_field_occupation",
    );
    formData.append(
      `customprofilefields[${customFieldIndex}][name]`,
      "profile_field_occupation",
    );
    formData.append(
      `customprofilefields[${customFieldIndex}][value]`,
      userData.occupation,
    );
    customFieldIndex++;
  }

  if (userData.school) {
    formData.append(
      `customprofilefields[${customFieldIndex}][type]`,
      "profile_field_school",
    );
    formData.append(
      `customprofilefields[${customFieldIndex}][name]`,
      "profile_field_school",
    );
    formData.append(
      `customprofilefields[${customFieldIndex}][value]`,
      userData.school,
    );
    customFieldIndex++;
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

export async function loginUser(credentials: LoginUserPayload) {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Login failed");
  }

  return response.json();
}

export async function getCourseCategories(
  params: GetCategoriesParams = {},
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
      : "",
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
  params: CoursesByFieldParams,
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

    if (typeof response.data === "string" && response.data.includes("<?xml")) {
      throw new Error(
        "API returned XML instead of JSON. Please check your NEXT_PUBLIC_MOODLE_REST_FORMAT environment variable. It should be set to 'json', not 'xml'.",
      );
    }

    const data: GetCoursesByFieldResponse = response.data;

    if (data.warnings && data.warnings.length > 0) {
      console.warn("API Warnings:", data.warnings);
    }

    if (data.courses) {
      data.courses = data.courses.filter((course) => course.visible === 1);
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
