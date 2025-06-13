import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const GetDp = () => {
    return (
        <>
            <div>GetDp</div>





            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="picture">Picture</Label>
                <Input id="picture" type="file" />
            </div>

        </>

    )
}

export default GetDp