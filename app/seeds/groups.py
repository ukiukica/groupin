# from app.models import db, Group


# # Adds a demo user, you can add other users here if you want
# def seed_groups():
#     group1 = Group(
#         name='Women in Technology San Diego',
#         details="We are back on Meetup! Our goal is to support the community of women in technology careers in San Diego County and surrounding cities. Check out our awesome pics and vids from events on Instagram! You can find us at @witsandiego. By becoming a part of our community, you can connect with other like-minded women in the tech industry. Our events are designed to help you develop both technical and leadership skills, allowing you to grow professionally. In our community, we strive to inspire and support each other in our career journeys, helping each member achieve their full potential. CONNECT • LEARN • SUPPORT• INSPIRE",
#         link='https://www.meetup.com/wit-sandiego/',
#         img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQQTmRKX5zZc3zD3qlnKrkEgz62kka0iWfw&usqp=CAU')
#     group2 = Group(
#         name='NYC++ Meetup',
#         details="Welcome to NYC++! We're a group based in Manhattan with deep roots in the New York C++ community. Join us for monthly meetups hosted by various companies, featuring talks by invited speakers, refreshments, and chances to chat and network. Our meetup is open to anybody with an interest in writing C++, with a skew towards those doing so professionally: Beginners and languages lawyers alike are welcome.",
#         link='https://www.meetup.com/new-york-c-c-meetup-group/',
#         img='https://secure.meetupstatic.com/photos/event/a/3/e/6/clean_508661958.jpeg')
#     group3 = Group(
#         name='Women Who Code NYC',
#         details="Women Who Code is the largest and most active community of engineers dedicated to inspiring women to excel in technology careers. We envision a world where women are representative as technical executives, founders, VCs, board members, and software engineers. Our programs are designed to get you there.",
#         link='https://www.meetup.com/womenwhocodenyc/',
#         img='https://secure.meetupstatic.com/photos/event/8/a/9/c/clean_507575484.jpeg')

#     db.session.add(group1)
#     db.session.add(group2)
#     db.session.add(group3)

#     db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
# def undo_groups():
#     db.session.execute('TRUNCATE groups RESTART IDENTITY CASCADE;')
#     db.session.commit()
