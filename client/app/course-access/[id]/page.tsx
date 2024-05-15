 'use client'
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import CourseContent from "../../components/Course/CourseContent";
import Loader from "../../components/Loader/Loader";
import { useLoadUserQuery } from "../../../redux/features/api/apiSlice";

type Props = {
    params:any;
}

const Page = ({params}: Props) => {
    const id = params.id;
  const { isLoading, error, data,refetch } = useLoadUserQuery(undefined, {});

  useEffect(() => {
    if (data) {
      const isPurchased = data.user.courses.find(
        (item: any) => item._id === id
      );
      if (!isPurchased) {
        redirect("/");
      }
    }
    if (error) {
      redirect("/");
    }
  }, [data,error, id]);

  return (
   <>
   {
    isLoading ? (
        <Loader />
    ) : (
        <div>
          <CourseContent id={id} user={data.user} />
        </div>
    )
   }
   </>
  )
}

export default Page