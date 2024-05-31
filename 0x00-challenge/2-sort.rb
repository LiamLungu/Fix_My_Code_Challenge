###
# 
# Sort integer arguments (ascending)
#
###

result = []
ARGV.each do |arg|
  # skip if not integer
  next if arg !~ /^-?[0-9]+$/

  # convert to integer
  i_arg = arg.to_i

  # add to result
  result << i_arg
end

# sort the result
result.sort!

# print the result
puts result
