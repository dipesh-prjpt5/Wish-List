import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const WishListPage = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Users Wishlist</h1>
      <p className="text-muted-foreground">
        Items added by user name
      </p>

      <Button asChild className="w-64">
        <Link to="/wishlist/new">
          Add new item
        </Link>
      </Button>
    </div>
  )
}

export default WishListPage
